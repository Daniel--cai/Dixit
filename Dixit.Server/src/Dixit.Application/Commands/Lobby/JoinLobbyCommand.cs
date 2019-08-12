using Dixit.Application.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Application.Commands
{
    public class JoinLobbyCommand : IRequest<JoinLobbyResponse>
    {
        public string Name { get; set; }
        public string Code { get; set; }
    }
}
