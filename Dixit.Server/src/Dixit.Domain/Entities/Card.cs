using Dixit.Domain.Interfaces;
using Dixit.Domain.ValueObjects;
using System;

namespace Dixit.Domain.Entities
{
    public class Card : IEntity, IEquatable<Card>
    {  
        public int Id { get; set; }
        public Player Owner { get; set; }
        public bool Discarded { get; set; }
        public int RoundSubmitted { get; set; }

        public Card(int id)
        {
            Id = id;
            RoundSubmitted = 0;
        }

        public void DrawnBy(Player owner)
        {
            Owner = owner;
        }

        public void Played(int round)
        {
            if (RoundSubmitted != 0)
                throw new InvalidOperationException($"Card {Id} has already been played in round {RoundSubmitted}");

            RoundSubmitted = round;
            Discarded = true;
        }

        public bool IsInPlayerHand()
        {
            return Owner != null && Discarded == false && RoundSubmitted == 0;
        }

        public bool IsPlayed()
        {
            return Owner != null && Discarded == true && RoundSubmitted != 0;
        }

        public bool IsInDeck()
        {
            return Owner == null && Discarded == false && RoundSubmitted == 0;
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
