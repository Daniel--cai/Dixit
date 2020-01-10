using System;
using System.Collections.Generic;
using System.Text;

namespace CardAssassin.Domain.Aggregates
{
    public class PlayerConnection
    {
        public string Name { get; set; }
        public string Identifier { get; set; }
        public string Code { get; set; }
    }
}
