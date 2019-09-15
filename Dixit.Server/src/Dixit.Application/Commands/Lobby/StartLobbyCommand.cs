
using Dixit.Application.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Application.Commands
{
    public class StartLobbyCommand : IRequest
    {
        public string Code { get; set; }
    }
}
