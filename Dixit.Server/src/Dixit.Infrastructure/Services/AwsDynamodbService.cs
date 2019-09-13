using Dixit.Application.Services;
using System.Collections.Generic;
using System.Linq;
using Dixit.Domain.Aggregates;
using System.Threading.Tasks;

namespace Dixit.Infrastructure.Services
{
    public class AwsDynamodbService : IAwsDynamodbService
    {

        public static List<Domain.Aggregates.Lobby> Lobbies = new List<Domain.Aggregates.Lobby>();

        public AwsDynamodbService()
        {
           
        }

        public void AddLobby(Lobby lobby)
        {
            Lobbies.Add(lobby);
        }

        public Lobby GetLobbyByCode(string code)
        {
            var found = Lobbies.FirstOrDefault(lobby => lobby.Code.ToLower() == code.ToLower());
            return found;
        }

        public Task SaveLobby(Lobby lobby)
        {
            var index = Lobbies.FindIndex(iterator=> iterator.Code == lobby.Code);
            Lobbies[index] = lobby;
            return Task.FromResult(true);
        }
    }
}
