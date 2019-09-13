using Dixit.Server.RealTime.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.RealTime.DTO
{
    public class LobbyJoinedDTO : INotificationDTO
    {
        public string Player { get; set; }
    }
}
