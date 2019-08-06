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
    public class StartLobbyHandler : IRequestHandler<StartLobbyCommand>
    {
        private readonly IMediator _mediator;
        public StartLobbyHandler(IMediator mediator)
        {
            _mediator = mediator;
        }
        public Task<Unit> Handle(StartLobbyCommand request, CancellationToken cancellationToken)
        {
            _mediator.Publish(new LobbyStartedEvent());
            return Unit.Task;
        }
    }
}
