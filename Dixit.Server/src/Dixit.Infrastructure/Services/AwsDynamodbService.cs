using Dixit.Core.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Infrastructure.Services
{
    public class AwsDynamodbService : IAwsDynamodbService
    {
        private readonly IAwsDynamodbClient _client;
        public AwsDynamodbService(IAwsDynamodbClient client)
        {
            _client = client;
        }
    }
}
