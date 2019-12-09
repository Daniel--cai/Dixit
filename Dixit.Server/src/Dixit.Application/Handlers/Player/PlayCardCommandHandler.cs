using Dixit.Application.Commands;
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
        private readonly IRepository _awsDynamodbService;

        public PlayCardCommandHandler(IMediator mediator, IRepository awsDynamodbService)
        {
            _mediator = mediator;
            _awsDynamodbService = awsDynamodbService;
        }

        public async Task<Unit> Handle(PlayCardCommand request, CancellationToken cancellationToken)
        {
            var lobby = await _awsDynamodbService.GetLobbyByCode(request.Code);

            var player = lobby.GetPlayerByName(request.Player);
            var card = lobby.GetCard(request.Card);
            lobby.PlayerPlayCard(player, card);

            await _awsDynamodbService.SaveLobby(lobby);

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
