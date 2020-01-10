using System;
using System.Collections.Generic;
using System.Text;

namespace CardAssassin.Infrastructure.Data.Model
{
    public class Round
    {
        public int Counter { get; set; }
        public string StoryTeller { get; set; }
        public string Story { get; set; }
        public List<int> Cards { get; set; } = new List<int>();
        public int StoryTellerCard { get; set; }
        public List<Vote> Votes { get; set; } = new List<Vote>();
    }
}
