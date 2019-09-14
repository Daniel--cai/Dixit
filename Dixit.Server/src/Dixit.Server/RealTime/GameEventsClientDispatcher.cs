﻿using Dixit.Application.Events;
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
    public class GameEventsClientDispatcher : INotificationHandler<StoryRevealedEvent>, INotificationHandler<RoundFinishedEvent>
    {
        private readonly IHubContext<LobbyEventsClientHub, IEventsClient> _hubContext;

        public GameEventsClientDispatcher(IHubContext<LobbyEventsClientHub, IEventsClient> hubContext)
        {
            _hubContext = hubContext;
        }

        public Task Handle(RoundFinishedEvent notification, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task Handle(StoryRevealedEvent notification, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
