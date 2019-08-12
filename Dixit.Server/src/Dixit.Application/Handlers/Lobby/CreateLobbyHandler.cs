using Dixit.Application.Commands;
using Dixit.Application.Events;
using Dixit.Application.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.Handlers
{
    public class CreateLobbyHandler : IRequestHandler<CreateLobbyCommand, CreateLobbyResponse>
    {
        private readonly IMediator _mediator;

        public CreateLobbyHandler(IMediator mediator)
        {
            _mediator = mediator;
        }

        public Task<CreateLobbyResponse> Handle(CreateLobbyCommand request, CancellationToken cancellationToken)
        {
            _mediator.Publish(new LobbyJoinedEvent());
            return null;
        }
    }
}
