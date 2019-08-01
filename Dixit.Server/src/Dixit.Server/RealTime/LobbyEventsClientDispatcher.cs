using Dixit.Core.Events;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Server.RealTime
{
    public class LobbyEventsClientDispatcher : INotificationHandler<LobbyCreatedEvent>
    {
        private readonly IHubContext<LobbyEventsClientHub> _hubContext;
        public LobbyEventsClientDispatcher (IHubContext<LobbyEventsClientHub> hubContext)
        {
            _hubContext = hubContext;
        }
            
        public Task Handle(LobbyCreatedEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.All.SendAsync("lobbyCreated", notification, cancellationToken);
        }
    }
}
