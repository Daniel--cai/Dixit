using Dixit.Domain.Entities;
using Dixit.Domain.Interfaces;
using Dixit.Domain.Services;
using Dixit.Domain.Services.Rules;
using Dixit.Domain.ValueObjects;
using System.Collections.Generic;
using Xunit;

namespace Dixit.Tests.Core.Domain.Services
{
    public class ScoreServiceTest
    {

        private readonly Player player1;
        private readonly Player player2;
        private readonly Player player3;
        private readonly Player player4;
        private readonly Card card1;
        private readonly Card card2;
        private readonly Card card3;
        private readonly Card card4;

        public ScoreServiceTest()
        {
            player1 = new Player("player1", "");
            player2 = new Player("player2", "");
            player3 = new Player("player3", "");
            player4 = new Player("player4", "");
            card1 = new Card(1);
            card2 = new Card(2);
            card3 = new Card(3);
            card4 = new Card(4);
            card1.Drawn(player1);
            card2.Drawn(player2);
            card3.Drawn(player3);
            card4.Drawn(player4);
        }

        [Fact]
        public void BonusRuleShouldReturn1WhenVote()
        {
            var storyTeller = player4;
            var votes = new List<Vote> { new Vote(player1,card2), new Vote(player2, card4), new Vote(player3, card2) };

            var rules = new List<IScoringRule> { new BonusRule(), new CorrectRule(), new StoryTellerRule() };
            var scoreService = new ScoreService(rules);
            var scoreBoard = scoreService.VallyVotes(votes, player4, card4);
            var player1Score = scoreBoard.Find(board => board.Player == player1);
            var player2Score = scoreBoard.Find(board => board.Player == player2);
            var player3Score = scoreBoard.Find(board => board.Player == player3);
            var player4Score = scoreBoard.Find(board => board.Player == player4);

            Assert.Null(player1Score);
            Assert.Equal(5, player2Score.Score);
            Assert.Null(player3Score);
            Assert.Equal(3, player4Score.Score);
        }

        [Fact]
        public void StoryRuleShouldReturn0When0Votes()
        {
            var storyTeller = player4;
            var storyCard = card4;
            var votes = new List<Vote> { new Vote(player1, card2), new Vote(player2, card3), new Vote(player3, card1) };

            var rules = new List<IScoringRule> { new BonusRule(), new CorrectRule(), new StoryTellerRule() };

            var scoreService = new ScoreService(rules);
            var scoreBoard = scoreService.VallyVotes(votes, player4, storyCard);

            var player1Score = scoreBoard.Find(board => board.Player == player1);
            var player2Score = scoreBoard.Find(board => board.Player == player2);
            var player3Score = scoreBoard.Find(board => board.Player == player3);
            var player4Score = scoreBoard.Find(board => board.Player == player4);

            Assert.Equal(1, player1Score.Score);
            Assert.Equal(1, player2Score.Score);
            Assert.Equal(1, player3Score.Score);
            Assert.Equal(0, player4Score.Score);
        }

        [Fact]
        public void StoryRuleShouldReturn0WhenAllVotes()
        {
            var storyTeller = player4;
            var storyCard = card4;
            var votes = new List<Vote> { new Vote(player1, storyCard), new Vote(player2, storyCard), new Vote(player3, storyCard) };

            var rules = new List<IScoringRule> { new BonusRule(), new CorrectRule(), new StoryTellerRule() };

            var scoreService = new ScoreService(rules);
            var scoreBoard = scoreService.VallyVotes(votes, player4, storyCard);

            var player1Score = scoreBoard.Find(board => board.Player == player1);
            var player2Score = scoreBoard.Find(board => board.Player == player2);
            var player3Score = scoreBoard.Find(board => board.Player == player3);
            var player4Score = scoreBoard.Find(board => board.Player == player4);

            Assert.Equal(3, player1Score.Score);
            Assert.Equal(3, player2Score.Score);
            Assert.Equal(3, player3Score.Score);
            Assert.Equal(0, player4Score.Score);
        }
    }
}
