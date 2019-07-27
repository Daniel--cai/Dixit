using Dixit.Core.Entities;

namespace Dixit.Core.ValueObjects
{
    public class Vote
    {
        public Player Player { get; set; }
        public Card Card { get; set; }
    }
}
