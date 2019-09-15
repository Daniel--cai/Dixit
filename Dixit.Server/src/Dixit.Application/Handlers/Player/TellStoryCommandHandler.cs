using Dixit.Application.Commands;
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

namespace Dixit.Application.Handlers
{
    public class TellStoryCommandHandler : IRequestHandler<TellStoryCommand>
    {
        private readonly IMediator _mediator;
        private readonly IAwsDynamodbService _awsDynamodbService;

        public TellStoryCommandHandler(IMediator mediator, IAwsDynamodbService awsDynamodbService)
        {
            _mediator = mediator;
            _awsDynamodbService = awsDynamodbService;
        }

        public async Task<Unit> Handle(TellStoryCommand request, CancellationToken cancellationToken)
        {
            var lobby = await _awsDynamodbService.GetLobbyByCode(request.Code);
           
            var player = lobby.GetPlayerByName(request.StoryTeller);
            var card = lobby.GetCard(request.Card);
            lobby.PlayerTellStory(player, request.Story, card);
           
            await _awsDynamodbService.SaveLobby(lobby);
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
