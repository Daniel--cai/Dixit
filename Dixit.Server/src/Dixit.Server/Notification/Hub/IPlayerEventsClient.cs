using Dixit.Server.Notification.Dispatchers;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.Notification.Hub
{
    public interface IPlayerEventsClient
    {
        Task StoryTold(StoryTold notification);
        Task CardVoted(CardVoted notification);
        Task CardPlayed(CardPlayed notification);
        Task CardDrawn(CardDrawn notification);
    }
}
