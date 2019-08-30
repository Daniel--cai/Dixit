using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.RealTime
{
    public class LobbyEventsClientHub : Hub
    {
        public override async Task OnConnectedAsync()
        {
            var helo = "ex";
            await base.OnConnectedAsync();
        }
    }
}
