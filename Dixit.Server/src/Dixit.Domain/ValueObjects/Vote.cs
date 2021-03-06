﻿using Dixit.Domain.Entities;

namespace Dixit.Domain.ValueObjects
{
    public class Vote
    {
        public Player Player { get; set; }
        public Card Card { get; set; }

        public Vote(Player player, Card card)
        {
            Player = player;
            Card = card;
        }
    }
}
