using Dixit.Application.Events;
using Dixit.Server.DTO;
using Dixit.Server.RealTime.Interface;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Server.RealTime
{
    public class GameEventsClientDispatcher : INotificationHandler<StoryRevealedEvent>, INotificationHandler<RoundFinishedEvent>
    {
        private readonly IHubContext<LobbyEventsClientHub, IEventsClient> _hubContext;

        public GameEventsClientDispatcher(IHubContext<LobbyEventsClientHub, IEventsClient> hubContext)
        {
            _hubContext = hubContext;
        }

        public Task Handle(RoundFinishedEvent notification, CancellationToken cancellationToken)
        {
            var scores = notification.PlayerScores.Select(player =>
                new PlayerDTO
                {
                    Name = player.Player.Name,
                    Score = player.Score
                });

            var votes = notification.Votes.Select(vote =>
                new VoteDTO
                {
                    Player = vote.Player.Name,
                    Card = vote.Card.Id
                });

            return _hubContext.Clients.All.RoundFinished(
                new RoundFinishedDTO
                {
                    PlayerUpdates = scores.ToList(),
                    Votes = votes.ToList(),
                    NextStoryTeller = notification.NextStoryTeller.Name,
                    StoryCard = notification.StoryCard.Id
                });
        }

        public Task Handle(StoryRevealedEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.All.StoryRevealed(
                new StoryRevealedDTO
                {
                    Cards = notification.Cards
                    .Select(card => card.Id).ToList()
                });
        }
    }
}
 