﻿using Dixit.Application.Events;
using Dixit.Application.Players.Events;
using Dixit.Server.Notification.Hub;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Server.Notification.Dispatchers
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
                new StoryTold
                {
                    StoryTeller = notification.StoryTeller,
                    Story = notification.Story
                }
            );
        }

        public Task Handle(CardVotedEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.All.CardVoted(
                new CardVoted
                {
                    Player = notification.Player.Name,
                }
            );
        }

        public Task Handle(CardSubmittedEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.All.CardPlayed(
                new CardPlayed
                {
                    Player = notification.Player.Name,
                }
            );
        }

        public Task Handle(CardDrawnEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.Client(notification.Player.Identifier).CardDrawn(
                new CardDrawn
                {
                    Player = notification.Player.Name,
                    Card = notification.Hand.Select(card => card.Id).ToList()
                }
            );
        }
    }
}
