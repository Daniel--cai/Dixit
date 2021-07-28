using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.Notification.Dispatchers
{
    public class StoryTold : INotification
    {
        public string StoryTeller { get; set; }
        public string Story { get; set; }
    }
}
