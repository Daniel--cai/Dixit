using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dixit.Application.Services;
using Dixit.Domain.Aggregates;
using Dixit.Infrastructure.Configuration;
using Dixit.Infrastructure.Data.Model;

using Microsoft.Extensions.Options;

namespace Dixit.Infrastructure.Services
{
    public class FirestoreService : IRepository
    {
        private readonly FirestoreConfig _config;

        private readonly INoSqlClient<Data.Model.Lobby> _client;

        public FirestoreService(INoSqlClient<Data.Model.Lobby> client)
        {
            _client = client;
        }

        public async Task<string> AddLobby(Domain.Aggregates.Lobby lobby)
        {
            var lobbyDto = new Data.Model.Lobby
            {
                Code = "",
                Rounds = new List<Round> { },
                RoundNumber = 0,
                Deck = new List<int> { 1,2,3,4,5,6,7,8,9,10 },
                Discard = new List<int> { },
                Players = new List<Player> { },
                GameState = "Lobby"

            };
            var id = await _client.CreateDocument(lobbyDto);
            return id;

        }

        public Task AddPlayerConnection(string name, string identifier, string code)
        {
            throw new NotImplementedException();
        }

        public async Task<Domain.Aggregates.Lobby> GetLobbyByCode(string code)
        {
            var lobby = await _client.GetDocumentById(code);

            if (lobby == null)
            {
                throw new Exception($"Lobby {code} not found");
            }

            return new Domain.Aggregates.Lobby();
        }

        public Task<PlayerConnection> GetPlayerConnectionByIdentifier(string identifier)
        {
            throw new NotImplementedException();
        }

        public Task RemovePlayerConnection(string identifier)
        {
            throw new NotImplementedException();
        }

        public Task SaveLobby(Domain.Aggregates.Lobby lobby)
        {
            throw new NotImplementedException();
        }
    }
}
