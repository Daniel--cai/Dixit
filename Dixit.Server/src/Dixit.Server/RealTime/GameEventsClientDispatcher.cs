using Dixit.Application.Events.Game;
using Dixit.Server.RealTime.Interface;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Server.RealTime
{
    public class GameEventsClientDispatcher : INotificationHandler<RoundFinishedEvent>
    {
        private readonly IHubContext<LobbyEventsClientHub, ILobbyEventsClient> _hubContext;

        public GameEventsClientDispatcher(IHubContext<LobbyEventsClientHub, ILobbyEventsClient> hubContext)
        {
            _hubContext = hubContext;
        }

        public Task Handle(RoundFinishedEvent notification, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
