using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Dixit.Application.Services;
using Dixit.Domain.Aggregates;
using Dixit.Infrastructure.Configuration;
using Dixit.Infrastructure.Data.Model;
using Dixit.Infrastructure.Mapper;
using Microsoft.Extensions.Options;

namespace Dixit.Infrastructure.Services
{
    public class PlayerConnectionRepository : IPlayerConnectionRepository
    {
        private readonly INoSqlClient<Data.Model.PlayerConnection> _client;
        private readonly IMapper _mapper;


        public PlayerConnectionRepository(INoSqlClient<Data.Model.PlayerConnection> client, IMapper mapper)
        {
            _client = client;
            _mapper = mapper;
        }

        public async Task<string> AddPlayerConnection(string name, string identifier, string code)
        {
            var playerConnection = new Data.Model.PlayerConnection
            {
                Name = name,
                Identifier = identifier,
                Code = code
            };
            var id = await _client.CreateDocument(playerConnection);
            return id;
        }

        public async Task<Domain.Aggregates.PlayerConnection> GetPlayerConnectionByIdentifier(string identifier)
        {
            var connection = await _client.GetDocumentsByField("Identifier", identifier);
            var playerConnection = connection.FirstOrDefault();
            return _mapper.Map<Domain.Aggregates.PlayerConnection>(playerConnection);
        }

        public async Task RemovePlayerConnection(string identifier)
        {
            var connection = await _client.GetDocumentsByField("Identifier", identifier);
            await _client.DeleteDocument(connection.FirstOrDefault());
        }

    }
}
