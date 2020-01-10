using System;
using System.Collections.Generic;

namespace CardAssassin.Application.Responses
{
    public class EliminatePlayerResponse
    {
        public string Target { get; set; }
        public List<string> Words { get; set; }
    }
}
