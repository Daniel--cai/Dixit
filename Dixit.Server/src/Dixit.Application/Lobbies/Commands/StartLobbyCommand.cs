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
    public class StartLobbyCommand : IRequest
    {
        public string Code { get; set; }
    }

    public class StartLobbyCommandHandler : IRequestHandler<StartLobbyCommand>
    {
        private readonly IMediator _mediator;
        private readonly ILobbyRepository _lobbyRepository;

        public StartLobbyCommandHandler(IMediator mediator, ILobbyRepository lobbyRepository)
        {
            _lobbyRepository = lobbyRepository;
            _mediator = mediator;
        }
        public async Task<Unit> Handle(StartLobbyCommand request, CancellationToken cancellationToken)
        {
            var lobby = await _lobbyRepository.GetLobbyByCode(request.Code);
            lobby.NewRound();
            lobby.DealDeck();
            await _lobbyRepository.SaveLobby(lobby);
            await _mediator.Publish(
                new LobbyStartedEvent
                {
                    Code = request.Code,
                    StoryTeller = lobby.CurrentStoryTeller,
                    Players = lobby.ActivePlayers
                });

            foreach  (var player in lobby.ActivePlayers)
            {
                await _mediator.Publish(new CardDrawnEvent { Code = request.Code, Player = player, Hand = lobby.Deck.Hand(player) });
            }

            return Unit.Value;
        }
    }
}
