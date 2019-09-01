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
    public class JoinLobbyHandler : IRequestHandler<JoinLobbyCommand>
    {
        private readonly IMediator _mediator;

        public JoinLobbyHandler(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<Unit> Handle(JoinLobbyCommand request, CancellationToken cancellationToken)
        {
            await _mediator.Publish(new LobbyJoinedEvent { Code = request.Code, Player = new Domain.Entities.Player() });
            return Unit.Value;
        }
    }
}
