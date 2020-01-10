using CardAssassin.Application.Events;
using CardAssassin.Server.DTO;
using CardAssassin.Server.RealTime.Interface;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CardAssassin.Server.RealTime
{
    public class PlayerEventsClientDispatcher : INotificationHandler<CardVotedEvent>, INotificationHandler<CardSubmittedEvent>, INotificationHandler<CardDrawnEvent>, INotificationHandler<StoryToldEvent>
    {
        private readonly IHubContext<LobbyEventsClientHub, IEventsClient> _hubContext;

        public PlayerEventsClientDispatcher(IHubContext<LobbyEventsClientHub, IEventsClient> hubContext)
        {
            _hubContext = hubContext;
        }

        public Task Handle(StoryToldEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.All.StoryTold(
                new StoryToldDTO
                {
                    StoryTeller = notification.StoryTeller,
                    Story = notification.Story
                }
            );
        }

        public Task Handle(CardVotedEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.All.CardVoted(
                new CardVotedDTO
                {
                    Player =notification.Player.Name,
                }
            );
        }

        public Task Handle(CardSubmittedEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.All.CardPlayed(
                new CardPlayedDTO
                {
                    Player = notification.Player.Name,
                }
            );
        }

        public Task Handle(CardDrawnEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.Client(notification.Player.Identifier).CardDrawn(
                new CardDrawnDTO
                {
                    Player = notification.Player.Name,
                    Card = notification.Hand.Select(card => card.Id).ToList()
                }
            );
        }
    }
}
