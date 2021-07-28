using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.Notification.Dispatchers
{
    public class CardVoted : INotification
    {
        public string Player { get; set; }
    }
}
