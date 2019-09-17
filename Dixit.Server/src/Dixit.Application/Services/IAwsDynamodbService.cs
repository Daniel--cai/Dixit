using Dixit.Domain.Aggregates;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Dixit.Application.Services
{
    public interface IAwsDynamodbService
    {
        void AddLobby(Lobby lobby);
        Task<Lobby> GetLobbyByCode(string code);
        Task<PlayerConnection> GetPlayerConnectionByIdentifier(string identifier);
        Task AddPlayerConnection(string name, string identifier, string code);
        Task RemovePlayerConnection(string identifier);
        Task SaveLobby(Lobby lobby);
    }
}
