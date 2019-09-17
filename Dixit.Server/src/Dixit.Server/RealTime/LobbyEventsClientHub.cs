using Dixit.Application.Events;
using Dixit.Domain.Entities;
using Dixit.Server.RealTime.Interface;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using System;
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
            await _mediator.Publish(new PlayerConnectedEvent { Player = name, Code = code, Identifier = connectionId });
            
        }
        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await _mediator.Publish(new PlayerDisconnectedEvent { Identifier = Context.ConnectionId });
            await base.OnDisconnectedAsync(exception);
        }
    }
}
