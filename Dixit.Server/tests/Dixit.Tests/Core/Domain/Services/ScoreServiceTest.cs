using AutoFixture;
using Dixit.Domain.Entities;
using Dixit.Domain.Interfaces;
using Dixit.Domain.Services;
using Dixit.Domain.Services.Rules;
using Dixit.Domain.ValueObjects;
using FluentAssertions;
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
            var fixture = new AutoFixture.Fixture();

            player1 = fixture.Create<Player>();
            player2 = fixture.Create<Player>();
            player3 = fixture.Create<Player>();
            player4 = fixture.Create<Player>();

            card1 = fixture.Create<Card>();
            card2 = fixture.Create<Card>();
            card3 = fixture.Create<Card>();
            card4 = fixture.Create<Card>();

            card1.DrawnBy(player1);
            card2.DrawnBy(player2);
            card3.DrawnBy(player3);
            card4.DrawnBy(player4);
        }

        [Fact]
        public void BonusRuleShouldReturnAtLeast1WhenVote()
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
            player1Score.Should().BeNull();
            player2Score.Score.Should().Equals(5);
            player3Score.Should().BeNull();
            player4Score.Score.Should().Equals(3);
        }

        [Fact]
        public void StoryRuleShouldReturn0When0VotesCorrect()
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
            player1Score.Score.Should().Be(1);
            player2Score.Score.Should().Be(1);
            player3Score.Score.Should().Be(1);
            player4Score.Score.Should().Be(0);
        }

        [Fact]
        public void StoryRuleShouldReturn0WhenAllVotesCorrect()
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

            player1Score.Score.Should().Be(2);
            player2Score.Score.Should().Be(2);
            player3Score.Score.Should().Be(2);
            player4Score.Should().BeNull();
        }

        [Fact]
        public void GameStateShouldBeGameOverWhenPlayerReaches30()
        {

        }
    }
}
