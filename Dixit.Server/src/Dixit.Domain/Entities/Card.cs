﻿using Dixit.Domain.Interfaces;

namespace Dixit.Domain.Entities
{
    public class Card : IEntity
    {  
        public int Id { get; set; }

        public Card(int id)
        {
            Id = id;
        }
    }

}
