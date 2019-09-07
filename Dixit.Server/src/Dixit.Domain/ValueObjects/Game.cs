using Dixit.Domain.Entities;
using System.Collections.Generic;
using System.Linq;

namespace Dixit.Domain.ValueObjects
{
    public class Game 
    {
        public IList<Round> Rounds { get; set; }
        public int RoundNumber { get; set; }
        public List<Card> Deck { get; set; }
        public List<Card> Discard { get; set; }

        public Round NewRound()
        {
            var round = new Round();
            Rounds.Add(round);
            RoundNumber++;
            return round;
        }

        public Round CurrentRound()
        {
            return Rounds[RoundNumber];
        }

        public Card DrawCard()
        {
            return Deck.First();
        }

        public void ShuffleDeck()
        {

        }     
    
    }
}
