
using CardAssassin.Application.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace CardAssassin.Application.Commands
{
    public class StartLobbyCommand : IRequest
    {
        public string Code { get; set; }
    }
}
