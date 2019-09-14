using Dixit.Application.Commands;
using Dixit.Application.Events;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.Handlers
{
    public class StartLobbyCommandHandler : IRequestHandler<StartLobbyCommand>
    {
        private readonly IMediator _mediator;
        public StartLobbyCommandHandler(IMediator mediator)
        {
            _mediator = mediator;
        }
        public async Task<Unit> Handle(StartLobbyCommand request, CancellationToken cancellationToken)
        {
            await _mediator.Publish(new LobbyStartedEvent());
            return Unit.Value;
        }
    }
}
