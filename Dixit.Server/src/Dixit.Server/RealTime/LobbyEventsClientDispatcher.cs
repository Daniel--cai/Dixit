using MediatR;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Dixit.Application.Events;
using Dixit.Server.RealTime.Interface;
using Dixit.Application.Events.Player;
using Dixit.Server.RealTime.DTO;

namespace Dixit.Server.RealTime
{
    public class LobbyEventsClientDispatcher : INotificationHandler<LobbyJoinedEvent>, INotificationHandler<CardDrawnEvent>
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

        public Task Handle(CardDrawnEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.All.CardDrawn(null);
        }
    }
}
