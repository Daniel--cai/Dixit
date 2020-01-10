using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardAssassin.Server.DTO
{
    public class LobbyStartedDTO : INotificationDTO
    {
        public string StoryTeller { get; set; }
        public List<string> Players { get; set; }
        public string Target { get; set; }
        public List<string> Words { get; set; }
    }
}
