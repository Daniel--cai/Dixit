using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;

using Dixit.Domain.Services;
using Dixit.Infrastructure.Configuration;
using System;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace Dixit.Infrastructure.Services
{
    public class AwsDynamodbClient : IAwsDynamodbClient
    {
        private readonly AmazonDynamoDBClient _client;
        private readonly DynamoDBContext _context;

        public AwsDynamodbClient(AwsConfig config)
        {
            _client = new AmazonDynamoDBClient(config.AccessToken, config.SecretAccess, new AmazonDynamoDBConfig()
            {
                ServiceURL = config.Endpoint
            });
            _context = new DynamoDBContext(_client, new DynamoDBContextConfig
            {
                TableNamePrefix = config.TableName
            });
        }

        public async Task<T> GetItemAsyncById<T>(string id)
        {
            return await _context.LoadAsync<T>(id);
        }
    }
}
