using Dixit.Application.Events;
using Dixit.Domain.Entities;
using Dixit.Server.RealTime.Interface;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.RealTime
{
    public class LobbyEventsClientHub : Hub<IEventsClient>
    {
        private readonly IMediator _mediator;

        public LobbyEventsClientHub(IMediator mediator)
        {
            _mediator = mediator;
        }

        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
            var name = Context.GetHttpContext().Request.Query["name"].ToString();
            var code = Context.GetHttpContext().Request.Query["code"].ToString();
            var connectionId = Context.ConnectionId;
            var player = new Player(name, connectionId);
            await _mediator.Publish(new LobbyJoinedEvent { Player = player, Code = code });
            
        }
        public override Task OnDisconnectedAsync(Exception exception)
        {
            return base.OnDisconnectedAsync(exception);
        }
    }
}
