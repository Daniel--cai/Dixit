using Dixit.Application.Events;
using Dixit.Server.RealTime.Interface;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.RealTime
{
    public class LobbyEventsClientHub : Hub<ILobbyEventsClient>
    {
    }
}
