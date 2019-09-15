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
        public List<Card> Deck { get; set; }
        public List<Player> Players { get; set; }
        public State GameState { get; set; }
        public int Id { get; set; }

        public Lobby()
        {
            Code = Guid.NewGuid().ToString().Substring(0, 4);
            Rounds = new List<Round>();
            Deck = new List<Card>();
            Players = new List<Player>();
            GameState = State.Lobby;
            RoundNumber = 0;
        }

        public Round NewRound()
        {
            var round = new Round();
            Rounds.Add(round);
            RoundNumber++;
            return round;
        }

        public Round CurrentRound()
        {
            return Rounds[RoundNumber - 1];
        }

        public Card DrawCard()
        {
            return Deck.First();
        }

        public void ShuffleDeck()
        {

        }

        public Round NextRound()
        {
            var storyTeller = NextStoryTeller();
            var round = NewRound();
            round.SetStoryTeller(storyTeller);
            return round;
        }

        public Player NextStoryTeller()
        {
            return Players[Rounds.Count % Players.Count];
        }

        public Card DrawCard(Player player)
        {
            var card = DrawCard();
            //player.DrawCard(card);
            return card;
        }

        public bool HasAllPlayersVoted()
        {
            var currentRound = Rounds[RoundNumber];
            return currentRound.Votes.Count() == Players.Count;
        }

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
            return Deck.Find(card => card.Id == id);
        }

        public void PlayerTellStory(Player player, string story, Card card)
        {
            if (GameState != State.Story)
                throw new InvalidOperationException($"Invalid game state {GameState.DisplayName} for TellStory command");
            CurrentRound().PlayerTellStory(player, story, card);
            GameState = State.InProgress;
        }

        public void PlayerVoteCard(Player player, Card card)
        {
            if (GameState != State.Voting)
                throw new InvalidOperationException($"Invalid game state {GameState.DisplayName} for PlayerVoteCard command");
            CurrentRound().PlayerVoteCard(player, card);
        }

    }
}
