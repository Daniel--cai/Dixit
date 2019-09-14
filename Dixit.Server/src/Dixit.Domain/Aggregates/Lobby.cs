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
        public List<Card> Discard { get; set; }
        public List<Player> Players { get; set; }
        public State GameState { get; set; }
        public int Id { get; set; }

        public Lobby()
        {
            Code = Guid.NewGuid().ToString().Substring(0, 4);
            Rounds = new List<Round>();
            Deck = new List<Card>();
            Discard = new List<Card>();
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
            player.DrawCard(card);
            return card;
        }

        public bool HasAllPlayersVoted()
        {
            var currentRound = Rounds[RoundNumber];
            return currentRound.Votes.Count() == Players.Count;
        }

        public List<Tuple<string, int>> TallyVotes()
        {
            var scorers = CurrentRound().Votes
                            .Where(vote => vote.Card.Id == CurrentRound().StoryTellerCard.Id)
                            .Select(vote => vote.Player);
            var scoreBoard= new List<Tuple<string, int>>();

            foreach (var scorer in scorers)
            {
                var scored= Players.First(player => player.Name == scorer.Name);
                scoreBoard.Add(new Tuple<string, int>(scored.Name, scored.ScorePoint()));
            };

            return scoreBoard;
        }

        public Player GetPlayerByName(string name)
        {
            return Players.Find(player => player.Name == name);
        }

    }
}
