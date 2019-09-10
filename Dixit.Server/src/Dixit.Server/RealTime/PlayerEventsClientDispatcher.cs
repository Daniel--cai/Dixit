using Dixit.Application.Events;
using Dixit.Server.RealTime.Interface;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Server.RealTime
{
    public class PlayerEventsClientDispatcher : INotificationHandler<StoryToldEvent>
    {
        private readonly IHubContext<LobbyEventsClientHub, IEventsClient> _hubContext;

        public PlayerEventsClientDispatcher(IHubContext<LobbyEventsClientHub, IEventsClient> hubContext)
        {
            _hubContext = hubContext;
        }

        public Task Handle(StoryToldEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.All.StoryTold(notification);
        }
    }
}
