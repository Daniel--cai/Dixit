using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.DTO
{
    public class PlayerDTO
    {
        public string Name { get; set; }
        public List<int> Hand { get; set; }
        public int Score { get; set; }
    }
}
