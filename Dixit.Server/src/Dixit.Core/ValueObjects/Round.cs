using Dixit.Core.Entities;
using System.Collections.Generic;

namespace Dixit.Core.ValueObjects
{
    public class Round
    {
        public int Counter { get; set;}
        public Player StoryTeller { get; set; }
        public string Story { get; set; }
        public IEnumerable<Card> Cards { get; set; }
        public Card StoryTellerCard { get; set; }
        public IEnumerable<Vote> Votes { get; set; }
    }
}
