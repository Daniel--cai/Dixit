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
            var lobby = SetupLobbyWithOneRound();
            var storyCard = lobby.Deck.Hand(lobby.CurrentStoryTeller).First();
            var played = new List<Card>();

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
            var lobby = SetupLobbyWithOneRound();
            lobby.GameState = State.Voting;
            var player1 = lobby.Players.First();
            var player4 = lobby.Players.Last();
            var card1 = lobby.Deck.Hand(player1).First();
            lobby.PlayerVoteCard(player4, card1);
            lobby.PlayerVoteCard(player4, card1);
            var votes = lobby.CurrentVotes;

            Assert.True(votes.Count == 1);
        }


        private Lobby SetupLobbyWithOneRound()
        {
            var lobby = SetupLobby();
            lobby.NewRound();
            var storyCard = lobby.Deck.Hand(lobby.CurrentStoryTeller).First();

            lobby.PlayerTellStory(lobby.CurrentStoryTeller,"Lorem ipsum", storyCard);
            return lobby;
        }

        private Lobby SetupLobby()
        {
            var player1 = new Player("player1", "");
            var player2 = new Player("player2", "");
            var player3 = new Player("player3", "");
            var player4 = new Player("player4", "");

            var card1 = new Card(1);
            var card2 = new Card(2);
            var card3 = new Card(3);
            var card4 = new Card(4);
            var card5 = new Card(5);
            var card6 = new Card(6);

            card1.DrawnBy(player1);
            card2.DrawnBy(player2);
            card3.DrawnBy(player3);
            card4.DrawnBy(player4);

            var lobby = new Lobby
            {
                Deck = new Deck(new List<Card> { card1, card2, card3, card4, card5, card6 }),
                Players = new List<Player> { player1, player2, player3, player4 },
                RoundNumber = 0,
                GameState = State.Lobby,
                Rounds = new List<Round>()
            };

            return lobby;
        }
    }
}
