using Dixit.Domain.Interfaces;
using System;

namespace Dixit.Domain.Entities
{
    public class Card : IEntity, IEquatable<Card>
    {  
        public int Id { get; set; }
        public Player Owner { get; set; }
        public bool Discarded { get; set; }

        public Card(int id)
        {
            Id = id;
        }

        public void Drawn(Player owner)
        {
            Owner = owner;
        }

        public bool IsInPlayerHand()
        {
            return Owner != null && Discarded == false;
        }

        public bool IsPlayed()
        {
            return Owner != null && Discarded == true;
        }

        public bool IsInDeck()
        {
            return Owner == null && Discarded == false;
        }

        public override bool Equals(object obj)
        {
            return Equals(obj as Card);
        }

        public bool Equals(Card other)
        {
            return Id == other.Id;
        }

        public override int GetHashCode()
        {
            return Id.GetHashCode();
        }

        public static bool operator ==(Card lhs, Card rhs)
        {
            if (lhs is null)
            {
                if (rhs is null)
                {
                    return true;
                }

                return false;
            }

            return lhs.Equals(rhs);
        }

        public static bool operator !=(Card lhs, Card rhs)
        {
            return !(lhs == rhs);
        }
    }

}
