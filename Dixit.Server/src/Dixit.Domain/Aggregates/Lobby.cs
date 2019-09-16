using Dixit.Domain.Entities;
using Dixit.Domain.Interfaces;
using Dixit.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Dixit.Domain.Aggregates
{
    public class Lobby : IEntity, IAggregateRoot
    {
        public string Code { get; set; }
        public List<Round> Rounds { get; set; }
        public int RoundNumber { get; set; }
        public Deck Deck { get; set; }
        public List<Player> Players { get; set; }
        public State GameState { get; set; }
        public int Id { get; set; }

        public Lobby()
        {
            Code = Guid.NewGuid().ToString().Substring(0, 4);
            Rounds = new List<Round>();
            Deck = InitializeDeck();
            Players = new List<Player>();
            GameState = State.Lobby;
            RoundNumber = 0;
        }

        private Deck InitializeDeck()
        {

            var deck = new List<Card>();
            for(var i = 1; i < 50; i++)
            {
                var card = new Card(i);
                deck.Add(card);
            }

            return new Deck(deck).Shuffle();
        }

        //aggregate getters

        public Round CurrentRound => RoundNumber > 0 ? Rounds[RoundNumber - 1] : null;

        public Player NextStoryTeller => Players[Rounds.Count % Players.Count];

        public Player CurrentStoryTeller => CurrentRound?.StoryTeller;

        public Card CurrentStoryCard => CurrentRound?.StoryTellerCard;

        public List<Card> CurrentPlayedCards => Deck.Cards.Where(card => card.RoundSubmitted == RoundNumber).ToList();

        public List<Vote> CurrentVotes => CurrentRound?.Votes;

        public bool HasAllPlayersVoted()
        {
            return CurrentVotes.Count == Players.Count - 1;
        }

        public bool HasAllPlayersPlayed()
        {
            return CurrentPlayedCards.Count == Players.Count;
        }

        //utility

        public void TallyVotes(List<ScoreCard> scoreCards)
        {

            foreach (var scoreCard in scoreCards)
            {
                scoreCard.Player.ScorePoint(scoreCard.Score);
            }
        }

        public Player GetPlayerByName(string name)
        {
            return Players.Find(player => player.Name == name);
        }

        public Card GetCard(int id)
        {
            return Deck.FindCard(id);
        }

        //entity wrappers

        public Round NewRound()
        {
            if (GameState != State.Lobby && GameState != State.Voting)
                throw new InvalidOperationException($"Invalid game state {GameState.DisplayName} for NewRound command");

            var round = new Round(++RoundNumber, NextStoryTeller);
            Rounds.Add(round);
            GameState = State.Story;

            foreach(var player in Players)
            {
                Deck.Draw(player);
            }

            return round;
        }


        public void DealDeck()
        {
            foreach (var player in Players)
            {
                for (var i = 0; i < 5; i++)
                {
                    DrawCard(player);
                }
            }
        }

        public Card DrawCard(Player player)
        {
            return Deck.Draw(player);
        }

        public void ShuffleDeck()
        {
            Deck.Shuffle();
        }

        //player actions

        public void PlayerTellStory(Player player, string story, Card card)
        {
            if (GameState != State.Story)
                throw new InvalidOperationException($"Invalid game state {GameState.DisplayName} for TellStory command");
            CurrentRound.PlayerTellStory(player, story, card);
            card.Played(RoundNumber);
            GameState = State.InProgress;
        }

        public void PlayerVoteCard(Player player, Card card)
        {
            if (GameState != State.Voting)
                throw new InvalidOperationException($"Invalid game state {GameState.DisplayName} for PlayerVoteCard command");


            if (!CurrentPlayedCards.Contains(card))
                throw new InvalidOperationException($"Player {player.Name} cannot vote for a card that hasn't been played.");

            CurrentRound.PlayerVoteCard(player, card);
        }

        public void PlayerPlayCard(Player player, Card card)
        {
            if (GameState != State.InProgress)
                throw new InvalidOperationException($"Invalid game state {GameState.DisplayName} for PlayerPlayCard command");
            var count = Deck.Hand(player).Count;
            if (Deck.Hand(player).Count < 6)
                throw new InvalidOperationException($"Player {player.Name} has already played a card");

            CurrentRound.PlayerPlayCard(player, card);
            if (HasAllPlayersPlayed())
            {
                GameState = State.Voting;
            }
        }
    }
}
