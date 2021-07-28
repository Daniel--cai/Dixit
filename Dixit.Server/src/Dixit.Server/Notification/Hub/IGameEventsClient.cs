using Dixit.Server.Notification.Dispatchers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.Notification.Hub
{
    public interface IGameEventsClient
    {
        Task RoundFinished(RoundFinished notification);
        Task StoryRevealed(StoryRevealed notification);
    }
}
