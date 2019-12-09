using Dixit.Application.Commands;
using Dixit.Application.Events;
using Dixit.Application.Responses;
using Dixit.Application.Services;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.Handlers
{
    public class JoinLobbyCommandHandler : INotificationHandler<PlayerConnectedEvent>
    {
        private readonly IMediator _mediator;
        private readonly IRepository _awsDynamodbService;

        public JoinLobbyCommandHandler(IMediator mediator, IRepository awsDynamodbService)
        {
            _mediator = mediator;
            _awsDynamodbService = awsDynamodbService;
        }

        public async Task Handle(PlayerConnectedEvent notification, CancellationToken cancellationToken)
        {
            var lobby = await _awsDynamodbService.GetLobbyByCode(notification.Code);
            
            var connected = lobby.PlayerConnected(notification.Player, notification.Identifier);
            var player = _awsDynamodbService.GetPlayerConnectionByIdentifier(notification.Identifier);
            await _awsDynamodbService.SaveLobby(lobby);
            await _awsDynamodbService.AddPlayerConnection(notification.Player, notification.Identifier, notification.Code);

            await _mediator.Publish(new LobbyJoinedEvent { Player = connected, Code = notification.Code });
        }
    }
}
