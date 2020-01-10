using CardAssassin.Domain.Entities;
using CardAssassin.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace CardAssassin.Application.Responses
{
    public class JoinLobbyResponse
    {
        public State State { get; set; }
        public IEnumerable<Player> Players { get; set; }
    }
}
