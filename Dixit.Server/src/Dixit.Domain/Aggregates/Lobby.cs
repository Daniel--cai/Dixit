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
        public Game Game { get; set; }
        public IList<Player> Players { get; set; }
        public State GameState { get; set; }
        
        public int Id { get; set; }

        public Lobby()
        {
            Code = new Guid().ToString().Substring(0,4);
        }

        public Round NextRound()
        {
            var storyTeller = NextStoryTeller();
            var round = Game.NewRound();
            round.SetStoryTeller(storyTeller);
            return round;
        }

        public Player NextStoryTeller()
        {
            return Players[Game.Rounds.Count % Players.Count];
        }

        public Card DrawCard(Player player)
        {
            var card = Game.DrawCard();
            player.DrawCard(card);
            return card;
        }

        public bool HasAllPlayersVoted()
        {
            var currentRound = Game.Rounds[Game.RoundNumber];
            return currentRound.Votes.Count() == Players.Count;
        }

        public List<Tuple<string, int>> TallyVotes()
        {
            var scorers = Game.CurrentRound().Votes
                            .Where(vote => vote.Card.Id == Game.CurrentRound().StoryTellerCard.Id)
                            .Select(vote => vote.Player);
            var scoreBoard= new List<Tuple<string, int>>();

            foreach (var scorer in scorers)
            {
                var scored= Players.First(player => player.Name == scorer.Name);
                scoreBoard.Add(new Tuple<string, int>(scored.Name, scored.ScorePoint()));
            };

            return scoreBoard;
        }
    }
}
