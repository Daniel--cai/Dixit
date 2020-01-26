using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dixit.Application.Services;
using Dixit.Domain.Aggregates;
using Dixit.Infrastructure.Configuration;
using Dixit.Infrastructure.Data.Model;
using Dixit.Infrastructure.Mapper;
using Microsoft.Extensions.Options;

namespace Dixit.Infrastructure.Services
{
    public class LobbyRepository : ILobbyRepository
    {
        private readonly INoSqlClient<Data.Model.Lobby> _client;
        private readonly ILobbyMapper _mapper;


        public LobbyRepository(INoSqlClient<Data.Model.Lobby> client, ILobbyMapper mapper)
        {
            _client = client;
            _mapper = mapper;
        }

        public async Task<string> AddLobby(Domain.Aggregates.Lobby lobby)
        {
            var lobbyDto = _mapper.Map(lobby);
            var id = await _client.CreateDocument(lobbyDto);
            return id;
        }


        public async Task<Domain.Aggregates.Lobby> GetLobbyByCode(string code)
        {
            var lobby = await _client.GetDocumentById(code);

            if (lobby == null)
            {
                throw new Exception($"Lobby {code} not found");
            }
            lobby.Code = code;
            lobby.Id = code;

            return _mapper.Map(lobby);
        }

        public async Task SaveLobby(Domain.Aggregates.Lobby lobby)
        {
            var lobbyDto = _mapper.Map(lobby);
            lobbyDto.Id = lobby.Code;
            await _client.UpdateDocument(lobbyDto);
        }
    }
}
