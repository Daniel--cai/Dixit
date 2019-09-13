using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Infrastructure.Data.Model
{
    public class Player
    {
        public string PlayerName { get; set; }
        public string ConnectionId { get; set; }
        public List<int> Hand { get; set; }
        public int Score { get; set; }
    }
}
