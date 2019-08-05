using Dixit.Domain.Entities;
using Dixit.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Application.Responses
{
    public class JoinLobbyResponse
    {
        public State State { get; set; }
        public List<Player> Players { get; set; }
    }
}
