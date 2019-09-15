using Dixit.Domain.Entities;

namespace Dixit.Domain.ValueObjects
{
    public class Hand
    {
        public Card Card { get; set; }
        public Player Player { get; set; }
    }
}
