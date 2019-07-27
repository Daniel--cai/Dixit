using System.Collections.Generic;

namespace Dixit.Core.ValueObjects
{
    public class Game 
    {
        public IEnumerable<Round> Rounds { get; set; }
    }
}
