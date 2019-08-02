using MediatR;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Dixit.Application.Events;
using Dixit.Server.RealTime.Events;

namespace Dixit.Server.RealTime
{
    public class LobbyEventsClientDispatcher : INotificationHandler<LobbyJoinedEvent>
    {
        private readonly IHubContext<LobbyEventsClientHub> _hubContext;

        public LobbyEventsClientDispatcher (IHubContext<LobbyEventsClientHub> hubContext)
        {
            _hubContext = hubContext;
        }
            
        public Task Handle(LobbyJoinedEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.Group(notification.Code).SendAsync(LobbyEvents.LobbyJoined, notification, cancellationToken);
        }
    }
}
