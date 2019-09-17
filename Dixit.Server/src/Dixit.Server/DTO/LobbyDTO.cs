using Dixit.Domain.ValueObjects;
using System.Collections.Generic;

namespace Dixit.Server.DTO
{
    public class LobbyDTO
    {
        public List<PlayerDTO> Players { get; set; } 
        public int RoundNumber { get; set; }
        public string GameState { get; set; }
        public string CurrentStoryTeller { get; set; }
        public int StoryCard { get; set; }
        public string Story { get; set; }
        public List<int> Cards { get; set; }
        public List<VoteDTO> Votes { get; set; }
        public List<int> Hand { get; set; }
    }
}
