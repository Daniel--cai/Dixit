using Dixit.Application.Events;
using Dixit.Application.Services;
using Dixit.Domain.Entities;
using Dixit.Domain.ValueObjects;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.Player
{
    public class TellStoryCommand : IRequest
    {
        public string StoryTeller { get; set; }
        public int Card { get; set; }
        public string Story { get; set; }
        public string Code { get; set; }
    }

    public class TellStoryCommandHandler : IRequestHandler<TellStoryCommand>
    {
        private readonly IMediator _mediator;
        private readonly ILobbyRepository _lobbyRepository;

        public TellStoryCommandHandler(IMediator mediator, ILobbyRepository lobbyRepository)
        {
            _mediator = mediator;
            _lobbyRepository = lobbyRepository;
        }

        public async Task<Unit> Handle(TellStoryCommand request, CancellationToken cancellationToken)
        {
            var lobby = await _lobbyRepository.GetLobbyByCode(request.Code);
           
            var player = lobby.GetPlayerByName(request.StoryTeller);
            var card = lobby.GetCard(request.Card);
            lobby.PlayerTellStory(player, request.Story, card);
           
            await _lobbyRepository.SaveLobby(lobby);
            await _mediator.Publish(new StoryToldEvent
            {
                Story = request.Story,
                StoryTeller = player.Name,
                Code = request.Code
            });
            return Unit.Value;
        }
    }
}
