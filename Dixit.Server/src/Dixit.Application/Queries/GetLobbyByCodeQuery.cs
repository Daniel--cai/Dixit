using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using Dixit.Domain.Aggregates;

namespace Dixit.Application.Queries
{
    public class GetLobbyByCodeQuery : IRequest<Lobby>
    {
        public string Code { get; set; }
        public string Player { get; set; }
    }
}
