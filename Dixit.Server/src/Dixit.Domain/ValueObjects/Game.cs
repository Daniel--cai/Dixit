using System.Collections.Generic;

namespace Dixit.Domain.ValueObjects
{
    public class Game 
    {
        public IEnumerable<Round> Rounds { get; set; }
    }
}
