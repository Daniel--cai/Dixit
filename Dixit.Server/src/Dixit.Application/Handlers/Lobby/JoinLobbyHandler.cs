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
    public class JoinLobbyHandler : INotificationHandler<LobbyJoinedEvent>
    {
        private readonly IMediator _mediator;
        private readonly IAwsDynamodbService _awsDynamodbService;

        public JoinLobbyHandler(IMediator mediator, IAwsDynamodbService awsDynamodbService)
        {
            _mediator = mediator;
            _awsDynamodbService = awsDynamodbService;
        }

        public async Task Handle(LobbyJoinedEvent notification, CancellationToken cancellationToken)
        {
            var lobby = _awsDynamodbService.GetLobbyByCode(notification.Code);
            lobby.Players.Add(notification.Player);
            await _awsDynamodbService.SaveLobby(lobby);
            return;
        }
    }
}
