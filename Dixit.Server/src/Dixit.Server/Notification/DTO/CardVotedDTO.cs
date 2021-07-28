using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.DTO
{
    public class CardVotedDTO : INotificationDTO
    {
        public string Player { get; set; }
    }
}
