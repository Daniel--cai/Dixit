using Dixit.Domain.Interfaces;
using System.Collections.Generic;

namespace Dixit.Domain.Entities
{
    public class Player : IEntity
    {
        public string Name { get; set; }
        public string Identifier { get; set; }
        public int Score { get; set; }
        public List<Card> Hand { get; set;}

        public int Id { get; set; }

        public Player(string name, string identifier)
        {
            Name = name;
            Identifier = identifier;
            Score = 0;
            Hand = new List<Card>();
        }

        public int ScorePoint()
        {
            Score++;
            return Score;
        }

        public List<Card> DrawCard(Card card)
        {
            Hand.Add(card);
            return Hand;
        }

    }
}
