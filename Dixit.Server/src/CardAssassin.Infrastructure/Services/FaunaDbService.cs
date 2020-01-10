using System;
using System.Threading.Tasks;
using CardAssassin.Application.Services;
using CardAssassin.Domain.Aggregates;

namespace CardAssassin.Infrastructure.Services
{
    public class FaunaDbService : IRepository
    {
        public readonly IFaunaDbClientFactory _faunaDbClientFactory;
        public FaunaDbService(IFaunaDbClientFactory faunaDbClientFactory)
        {
            _faunaDbClientFactory = faunaDbClientFactory;
        }

        public void AddLobby(Lobby lobby)
        {
            throw new NotImplementedException();
        }

        public Task AddPlayerConnection(string name, string identifier, string code)
        {
            throw new NotImplementedException();
        }

        public Task<Lobby> GetLobbyByCode(string code)
        {
            throw new NotImplementedException();
        }

        public Task<PlayerConnection> GetPlayerConnectionByIdentifier(string identifier)
        {
            throw new NotImplementedException();
        }

        public Task RemovePlayerConnection(string identifier)
        {
            throw new NotImplementedException();
        }

        public Task SaveLobby(Lobby lobby)
        {
            throw new NotImplementedException();
        }

        Task<PlayerConnection> IRepository.GetPlayerConnectionByIdentifier(string identifier)
        {
            throw new NotImplementedException();
        }
    }
}
