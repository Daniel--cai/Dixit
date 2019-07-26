using Dixit.Core.SharedKernel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Core.Entities
{
    public class Lobby : BaseEntity
    {
        public string Code { get; set; }
        public Game Game { get; set; }
        public IEnumerable<Player> Players { get; set; }
    }
}
