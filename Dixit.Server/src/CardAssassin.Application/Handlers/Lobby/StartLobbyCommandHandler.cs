using CardAssassin.Application.Commands;
using CardAssassin.Application.Events;
using CardAssassin.Application.Services;
using CardAssassin.Domain.Interfaces;
using CardAssassin.Domain.ValueObjects;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CardAssassin.Application.Handlers
{
    public class StartLobbyCommandHandler : IRequestHandler<StartLobbyCommand>
    {
        private readonly IMediator _mediator;
        private readonly IRepository _awsDynamodbService;
        private readonly ISetupService _setupService;

        public StartLobbyCommandHandler(IMediator mediator, IRepository awsDynamodbService, ISetupService setupService)
        {
            _mediator = mediator;
            _awsDynamodbService = awsDynamodbService;
            _setupService = setupService;
        }
        public async Task<Unit> Handle(StartLobbyCommand request, CancellationToken cancellationToken)
        {
            var lobby = await _awsDynamodbService.GetLobbyByCode(request.Code);
            var players = lobby.ActivePlayers.Select(player => player.Name).ToList();
            var targets = _setupService.ResolveTargets(players);
            var words = _setupService.ResolveWords(players);

            lobby.AssignTargets(targets);
            lobby.AssignWords(words);

            await _awsDynamodbService.SaveLobby(lobby);

            foreach (var player in lobby.ActivePlayers)
            {
                await _mediator.Publish(new LobbyStartedEvent { Code = request.Code, Player = player });
            }


            return Unit.Value;
        }
    }
}
