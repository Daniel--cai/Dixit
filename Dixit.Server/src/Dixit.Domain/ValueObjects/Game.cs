using System.Collections.Generic;

namespace Dixit.Domain.ValueObjects
{
    public class Game 
    {
        public IList<Round> Rounds { get; set; }
        public int RoundNumber { get; set; }

        public Round NewRound()
        {
            var round = new Round();
            Rounds.Add(round);
            RoundNumber++;
            return round;
        }

        public int GetRoundNumber()
        {
            return RoundNumber;
        }
    }
}
