using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using CardAssassin.Domain.Aggregates;

namespace CardAssassin.Application.Queries
{
    public class GetLobbyByCodeQuery : IRequest<Lobby>
    {
        public string Code { get; set; }
        public string Player { get; set; }
    }
}
