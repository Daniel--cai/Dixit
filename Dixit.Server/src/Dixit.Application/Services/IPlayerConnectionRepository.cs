using System;
using System.Threading.Tasks;
using Dixit.Domain.Aggregates;

namespace Dixit.Application.Services
{
    public interface IPlayerConnectionRepository
    {
        Task<PlayerConnection> GetPlayerConnectionByIdentifier(string identifier);
        Task<string> AddPlayerConnection(string name, string identifier, string code);
        Task RemovePlayerConnection(string identifier);
    }
}
