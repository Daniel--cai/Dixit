using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.Notification.Dispatchers
{
    public class LobbyStarted : INotification
    {
        public string StoryTeller { get; set; }
        public List<string> Players { get; set; }
    }
}
