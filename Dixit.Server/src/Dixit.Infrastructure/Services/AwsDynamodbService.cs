using Dixit.Application.Services;
using System.Collections.Generic;
using System.Linq;
using Dixit.Domain.Aggregates;
using System.Threading.Tasks;

namespace Dixit.Infrastructure.Services
{
    public class AwsDynamodbService : IRepository
    {

        public static List<Lobby> Lobbies = new List<Lobby>();
        public static List<PlayerConnection> PlayerConnections = new List<PlayerConnection>();

        public void AddLobby(Lobby lobby)
        {
            Lobbies.Add(lobby);
        }

        public Task AddPlayerConnection(string name, string identifier, string code)
        {
            PlayerConnections.Add(new PlayerConnection { Name = name, Identifier = identifier, Code = code });
            return Task.FromResult(0);
        }

        public Task<Lobby> GetLobbyByCode(string code)
        {
            var found = Lobbies.FirstOrDefault(lobby => lobby.Code.ToLower() == code.ToLower());
            return Task.FromResult(found);
        }

        public Task<PlayerConnection> GetPlayerConnectionByIdentifier(string identifier)
        {
            var found = PlayerConnections.FirstOrDefault(connection => connection.Identifier.ToLower() == identifier.ToLower());
            return Task.FromResult(found);
        }

        public Task RemovePlayerConnection(string identifier)
        {
            var count = PlayerConnections.RemoveAll(connection => connection.Identifier.ToLower() == identifier.ToLower());
            return Task.FromResult(count);
        }

        public Task SaveLobby(Lobby lobby)
        {
            var index = Lobbies.FindIndex(iterator=> iterator.Code == lobby.Code);
            Lobbies[index] = lobby;
            return Task.FromResult(true);
        }
    }
}
