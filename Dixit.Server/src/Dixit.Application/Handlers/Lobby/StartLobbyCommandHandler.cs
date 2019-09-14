using Dixit.Application.Commands;
using Dixit.Application.Events;
using Dixit.Application.Services;
using Dixit.Domain.ValueObjects;
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
        private readonly IAwsDynamodbService _awsDynamodbService;

        public StartLobbyCommandHandler(IMediator mediator, IAwsDynamodbService awsDynamodbService)
        {
            _awsDynamodbService = awsDynamodbService;
            _mediator = mediator;
        }
        public async Task<Unit> Handle(StartLobbyCommand request, CancellationToken cancellationToken)
        {
            var lobby = await _awsDynamodbService.GetLobbyByCode(request.Code);
            if (lobby.GameState != State.Lobby) return Unit.Value;
            lobby.GameState = State.Story;
            lobby.NextRound();
            var storyTeller = lobby.CurrentRound().StoryTeller;
            await _mediator.Publish(new LobbyStartedEvent { Code = request.Code, StoryTeller = storyTeller } );
            return Unit.Value;
        }
    }
}
