using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.Notification.Hub
{
    public interface IEventsClient: IGameEventsClient, ILobbyEventsClient, IPlayerEventsClient
    {
    }
}
