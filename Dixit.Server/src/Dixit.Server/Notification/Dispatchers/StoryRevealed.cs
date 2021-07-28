using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.Notification.Dispatchers
{
    public class StoryRevealed : INotification
    {
        public List<int> Cards { get; set; }
    }
}
