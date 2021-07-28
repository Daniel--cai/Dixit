using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.Notification.Dispatchers
{
    public class CardDrawn
    {
        public string Player { get; set; }
        public List<int> Card { get; set; }
    }
}
