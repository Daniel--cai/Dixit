using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.DTO
{
    public class LobbyStartedDTO : INotificationDTO
    {
        public string StoryTeller { get; set; }
    }
}
