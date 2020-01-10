using System.Collections.Generic;

namespace CardAssassin.Domain.ValueObjects
{
    public class AssignedWords
    {
        public string Player { get; set; }
        public List<string> Words { get; set; }
    }
}
