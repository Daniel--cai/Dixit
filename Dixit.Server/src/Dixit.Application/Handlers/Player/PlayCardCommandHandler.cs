﻿using Dixit.Application.Commands;
using Dixit.Application.Events;
using Dixit.Application.Services;
using Dixit.Domain.ValueObjects;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.Handlers
{
    public class PlayCardCommandHandler : IRequestHandler<PlayCardCommand>
    {
        private readonly IMediator _mediator;
        private readonly ILobbyRepository _lobbyRepository;

        public PlayCardCommandHandler(IMediator mediator, ILobbyRepository lobbyRepository)
        {
            _mediator = mediator;
            _lobbyRepository = lobbyRepository;
        }

        public async Task<Unit> Handle(PlayCardCommand request, CancellationToken cancellationToken)
        {
            var lobby = await _lobbyRepository.GetLobbyByCode(request.Code);

            var player = lobby.GetPlayerByName(request.Player);
            var card = lobby.GetCard(request.Card);
            lobby.PlayerPlayCard(player, card);

            await _lobbyRepository.SaveLobby(lobby);

            if (lobby.GameState == State.Voting)
            {
                await _mediator.Publish(new StoryRevealedEvent
                {
                    Cards = lobby.CurrentPlayedCards
                });
            }
        
            return Unit.Value;
        }
    }
}
