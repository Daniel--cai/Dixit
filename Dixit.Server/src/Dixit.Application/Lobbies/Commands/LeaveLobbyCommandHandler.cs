using Dixit.Application.Events;
using Dixit.Application.Responses;
using Dixit.Application.Services;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.Lobbies.Commands
{
    public class LeaveLobbyCommandHandler : INotificationHandler<PlayerDisconnectedEvent>
    {
        private readonly IMediator _mediator;
        private readonly ILobbyRepository _lobbyRepository;
        private readonly IPlayerConnectionRepository _playerConnectionRepository;

        public LeaveLobbyCommandHandler(IMediator mediator, ILobbyRepository lobbyRepository, IPlayerConnectionRepository playerConnectionRepository)
        {
            _mediator = mediator;
            _lobbyRepository = lobbyRepository;
            _playerConnectionRepository = playerConnectionRepository;
        }

        public async Task Handle(PlayerDisconnectedEvent notification, CancellationToken cancellationToken)
        {
            var connection = await _playerConnectionRepository.GetPlayerConnectionByIdentifier(notification.Identifier);
            var lobby = await _lobbyRepository.GetLobbyByCode(connection.Code);
            var disconnected = lobby.PlayerDisconnected(connection.Name);
            await _lobbyRepository.SaveLobby(lobby);
            await _playerConnectionRepository.RemovePlayerConnection(notification.Identifier);
            await _mediator.Publish(new LobbyLeaveEvent { Player = disconnected, Code = lobby.Code });
            
        }
    }
}
