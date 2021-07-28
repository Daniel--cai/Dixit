using MediatR;
using Microsoft.AspNetCore.SignalR;
using System.Threading;
using System.Threading.Tasks;
using Dixit.Server.Notification.Hub;
using System.Linq;
using Dixit.Application.Lobbies.Events;

namespace Dixit.Server.Notification.Dispatchers
{
    public class LobbyEventsClientDispatcher : INotificationHandler<LobbyJoinedEvent>, INotificationHandler<LobbyStartedEvent>, INotificationHandler<LobbyLeaveEvent>
    {
        private readonly IHubContext<LobbyEventsClientHub, IEventsClient> _hubContext;

        public LobbyEventsClientDispatcher (IHubContext<LobbyEventsClientHub, IEventsClient> hubContext)
        {
            _hubContext = hubContext;
        }
            
        public Task Handle(LobbyJoinedEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.All.LobbyJoined(new LobbyJoined { Player = notification.Player.Name } );
        }

        public Task Handle(LobbyStartedEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.All.LobbyStarted(
                new LobbyStarted
                {
                    Players = notification.Players.Select(player => player.Name).ToList(), 
                    StoryTeller = notification.StoryTeller.Name 
                });
        }

        public Task Handle(LobbyLeaveEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.All.LobbyLeft(new LobbyLeft { Player = notification.Player.Name });
        }
    }
}
