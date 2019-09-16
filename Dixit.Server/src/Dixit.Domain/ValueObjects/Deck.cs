using Dixit.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Dixit.Domain.ValueObjects
{
    public class Deck
    {
        public List<Card> Cards { get; set; }

        public Deck(List<Card> cards)
        {
            Cards = cards;
        }

        public Card Draw(Player player)
        {
            var drawn = Cards.First(card => card.IsInDeck());
            drawn.DrawnBy(player);
            return drawn;
        }

        public Card FindCard(int id)
        {
            return Cards.Find(card => card.Id == id);
        }

        public List<Card> Hand(Player player)
        {
            return Cards.Where(card => card.Owner == player && card.Discarded == false).ToList();
        }


        public Deck Shuffle()
        {
            Random random = new Random();
            int n = Cards.Count;

            for (int i = Cards.Count - 1; i > 1; i--)
            {
                int rnd = random.Next(i + 1);

                Card value = Cards[rnd];
                Cards[rnd] = Cards[i];
                Cards[i] = value;
            }
            return this;
        }
    }
}
