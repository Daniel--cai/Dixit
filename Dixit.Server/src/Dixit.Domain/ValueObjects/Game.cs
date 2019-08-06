using System.Collections.Generic;

namespace Dixit.Domain.ValueObjects
{
    public class Game 
    {
        public IList<Round> Rounds { get; set; }
    }
}
