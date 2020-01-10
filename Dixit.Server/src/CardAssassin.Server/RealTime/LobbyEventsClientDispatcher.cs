using MediatR;
using Microsoft.AspNetCore.SignalR;
using System.Threading;
using System.Threading.Tasks;
using CardAssassin.Application.Events;
using CardAssassin.Server.RealTime.Interface;
using CardAssassin.Server.DTO;
using System.Linq;

namespace CardAssassin.Server.RealTime
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
            return _hubContext.Clients.All.LobbyJoined(new LobbyJoinedDTO { Player = notification.Player.Name } );
        }

        public Task Handle(LobbyStartedEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.All.LobbyStarted(
                new LobbyStartedDTO
                {
                    Players = notification.Players.Select(player => player.Name).ToList(), 
                    StoryTeller = notification.StoryTeller.Name,
                    Target = notification.Player.Target.Name,
                    Words = notification.Player.Words

                   
                    
                });
        }

        public Task Handle(LobbyLeaveEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.All.LobbyLeft(new LobbyLeftDTO { Player = notification.Player.Name });
        }
    }
}
