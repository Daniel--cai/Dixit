using Dixit.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.Notification.Dispatchers
{
    public class RoundFinished : INotification
    {
        public List<Vote> Votes { get;set;}
        public List<Player> PlayerUpdates { get; set; }
        public string NextStoryTeller { get; set; }
        public int StoryCard { get; set; }
    }
}
