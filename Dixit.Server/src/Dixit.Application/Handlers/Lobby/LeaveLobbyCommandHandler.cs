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
    public class LeaveLobbyCommandHandler : INotificationHandler<PlayerDisconnectedEvent>
    {
        private readonly IMediator _mediator;
        private readonly IAwsDynamodbService _awsDynamodbService;

        public LeaveLobbyCommandHandler(IMediator mediator, IAwsDynamodbService awsDynamodbService)
        {
            _mediator = mediator;
            _awsDynamodbService = awsDynamodbService;
        }

        public async Task Handle(PlayerDisconnectedEvent notification, CancellationToken cancellationToken)
        {
            var connection = await _awsDynamodbService.GetPlayerConnectionByIdentifier(notification.Identifier);
            var lobby = await _awsDynamodbService.GetLobbyByCode(connection.Code);
            var disconnected = lobby.PlayerDisconnected(connection.Name);
            await _awsDynamodbService.SaveLobby(lobby);
            await _awsDynamodbService.RemovePlayerConnection(notification.Identifier);
            await _mediator.Publish(new LobbyLeaveEvent { Player = disconnected, Code = lobby.Code });
            
        }
    }
}
