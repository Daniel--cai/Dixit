using System;
using System.Threading.Tasks;
using Dixit.Application.Services;
using Dixit.Domain.Aggregates;
using FaunaDB.Client;
using FaunaDB.Types;

using static FaunaDB.Query.Language;


namespace Dixit.Infrastructure.Services
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

        public async Task<Lobby> GetLobbyByCode(string code)
        {
            var client = _faunaDbClientFactory.CreateClient();
            var result = await client.Query(Paginate(Match(Index("spells"))));
            var data = result.At("data").To<Value[]>();
            Values[ lobby = null;

            data.Match(
                Success: value => lobby = value,
                Failure: reason => )
            );

            return lobby;

        }
        private void ProcessData(Value[] values)
        {
            foreach (Value value in values)
            {
                //do something
            }
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
    }
}
