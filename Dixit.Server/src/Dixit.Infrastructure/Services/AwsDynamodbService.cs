using Dixit.Domain.Services;

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
