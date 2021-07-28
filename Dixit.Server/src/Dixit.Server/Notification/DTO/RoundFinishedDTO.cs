using Dixit.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.DTO
{
    public class RoundFinishedDTO : INotificationDTO
    {
        public List<VoteDTO> Votes { get;set;}
        public List<PlayerDTO> PlayerUpdates { get; set; }
        public string NextStoryTeller { get; set; }
        public int StoryCard { get; set; }
    }
}
