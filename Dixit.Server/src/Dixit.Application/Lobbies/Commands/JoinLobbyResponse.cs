using Dixit.Domain.Entities;
using Dixit.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Application.Lobbies.Commands
{
    public class JoinLobbyResponse
    {
        public State State { get; set; }
        public IEnumerable<Player> Players { get; set; }
    }
}
