using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dixit.Application.Events;
using Dixit.Application.SharedKernel;

namespace Dixit.Server.Notification.Dispatchers
{
    public class Player : IMapFrom<RoundFinishedEvent>
    {
        public string Name { get; set; }
        public int Score { get; set; }
    }
}
