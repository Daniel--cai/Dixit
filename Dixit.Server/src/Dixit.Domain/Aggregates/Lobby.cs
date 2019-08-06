using Dixit.Domain.Entities;
using Dixit.Domain.Interfaces;
using Dixit.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Domain.Aggregates
{
    public class Lobby : IEntity, IAggregateRoot
    {
        public string Code { get; set; }
        public Game Game { get; set; }
        public IEnumerable<Player> Players { get; set; }
        public State GameState { get; set; }

        public int Id { get; set; }
    }
}
