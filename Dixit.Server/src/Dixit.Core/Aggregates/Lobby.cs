using Dixit.Core.Entities;
using Dixit.Core.Interfaces;
using Dixit.Core.SharedKernel;
using Dixit.Core.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Core.Aggregates
{
    public class Lobby : BaseEntity, IAggregateRoot
    {
        public string Code { get; set; }
        public Game Game { get; set; }
        public IEnumerable<Player> Players { get; set; }
        public State GameState { get; set; }
    }
}
