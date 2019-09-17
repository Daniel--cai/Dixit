using Dixit.Domain.Aggregates;
using Dixit.Domain.Entities;
using Dixit.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xunit;

namespace Dixit.Tests.Core.Domain.Aggregates
{

    public class LobbyTest
    {
        [Fact]
        public void PlayerTellStory_ShouldHoldCard()
        {
            var lobby = SetupLobby();
            lobby.NewRound();
            var player4Card = lobby.Deck.Hand(lobby.Players.Last()).First();
            Assert.Throws<InvalidOperationException>(() 
                => lobby.PlayerTellStory(lobby.CurrentStoryTeller, "Lorem ipsum", player4Card));
        }

        [Fact]
        public void PlayerTellStory_ShouldChangeInProgressGameState()
        {
            var lobby = SetupLobby();
            lobby.NewRound();
            var storyCard = lobby.Deck.Hand(lobby.CurrentStoryTeller).First();
            lobby.PlayerTellStory(lobby.CurrentStoryTeller, "Lorem ipsum", storyCard);
            Assert.True(lobby.GameState == State.InProgress);
        }

        [Fact]
        public void PlayerPlayCard_ShouldChangeVotingGameState()
        {
            var lobby = SetupLobby();
            lobby.NewRound();
            var storyCard = lobby.Deck.Hand(lobby.CurrentStoryTeller).First();
            lobby.PlayerTellStory(lobby.CurrentStoryTeller, "Lorem ipsum", storyCard);
            var played = new List<Card>() { storyCard };

            foreach(var player in lobby.Players)
            {
                if (player == lobby.CurrentStoryTeller) continue;
                var card = lobby.Deck.Hand(player).First();
                lobby.PlayerPlayCard(player, card);
                played.Add(card);
            }

            Assert.True(lobby.HasAllPlayersPlayed());
            Assert.Equal(played, lobby.CurrentPlayedCards);
            Assert.Equal(State.Voting, lobby.GameState);
        }

        [Fact]
        public void PlayerVoteCard_ShouldRevoteCorrect()
        {
            var lobby = SetupLobby();
            lobby.NewRound();
            var storyCard = lobby.Deck.Hand(lobby.CurrentStoryTeller).First();
            lobby.PlayerTellStory(lobby.CurrentStoryTeller, "Lorem ipsum", storyCard);

            foreach (var player in lobby.Players)
            {
                if (player == lobby.CurrentStoryTeller) continue;
                lobby.PlayerPlayCard(player, lobby.Deck.Hand(player).First());
            }
            var player1 = lobby.Players.Last();

            lobby.PlayerVoteCard(player1, storyCard);
            lobby.PlayerVoteCard(player1, storyCard);
            var votes = lobby.CurrentVotes;

            Assert.True(votes.Count == 1);
        }

        private Lobby SetupLobby()
        {
            var player1 = new Player("player1", "");
            var player2 = new Player("player2", "");
            var player3 = new Player("player3", "");
            var player4 = new Player("player4", "");
            var lobby = new Lobby();

            lobby.Players.Add(player1);
            lobby.Players.Add(player2);
            lobby.Players.Add(player3);
            lobby.Players.Add(player4);

            lobby.DealDeck();

            return lobby;
        }
    }
}
