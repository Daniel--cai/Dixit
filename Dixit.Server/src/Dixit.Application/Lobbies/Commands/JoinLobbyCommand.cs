﻿using Dixit.Application.Lobbies.Events;
using Dixit.Application.Players.Events;
using Dixit.Application.Services;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.Lobbies.Commands
{
    public class JoinLobbyCommand : IRequest
    {
        public string Name { get; set; }
        public string Code { get; set; }
    }

    public class JoinLobbyCommandHandler : INotificationHandler<PlayerConnectedEvent>, INotificationHandler<ScreenConnectedEvent>
    {
        private readonly IMediator _mediator;
        private readonly ILobbyRepository _lobbyRepository;
        private readonly IPlayerConnectionRepository _playerConnectionRepository;

        public JoinLobbyCommandHandler(IMediator mediator, ILobbyRepository lobbyRepository, IPlayerConnectionRepository playerConnectionRepository)
        {
            _mediator = mediator;
            _lobbyRepository = lobbyRepository;
            _playerConnectionRepository = playerConnectionRepository;
        }

        public async Task Handle(PlayerConnectedEvent notification, CancellationToken cancellationToken)
        {
            var lobby = await _lobbyRepository.GetLobbyByCode(notification.Code);
            
            var connected = lobby.PlayerConnected(notification.Player, notification.Identifier);
            await _playerConnectionRepository.AddPlayerConnection(notification.Player, notification.Identifier, notification.Code);
            await _lobbyRepository.SaveLobby(lobby);

            await _mediator.Publish(new LobbyJoinedEvent { Player = connected, Code = notification.Code });
        }

        public async Task Handle(ScreenConnectedEvent notification, CancellationToken cancellationToken)
        {
            //var lobby = await _lobbyRepository.GetLobbyByCode(notification.Code);
            //var connected = lobby.PlayerConnected("SYSTEM", notification.Identifier);
            //connected.Connected = false;
            await _playerConnectionRepository.AddPlayerConnection("SYSTEM", notification.Identifier, notification.Code);
            //await _lobbyRepository.SaveLobby(lobby);
        }
    }
}
