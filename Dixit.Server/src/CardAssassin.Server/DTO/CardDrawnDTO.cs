using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardAssassin.Server.DTO
{
    public class CardDrawnDTO
    {
        public string Player { get; set; }
        public List<int> Card { get; set; }
    }
}
