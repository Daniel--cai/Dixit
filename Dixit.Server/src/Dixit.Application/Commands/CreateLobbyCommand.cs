using Dixit.Application.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Application.Commands
{
    public class CreateLobbyCommand : IRequest<CreateLobbyResponse>
    {
        public string Name { get; set; }
    }
}
