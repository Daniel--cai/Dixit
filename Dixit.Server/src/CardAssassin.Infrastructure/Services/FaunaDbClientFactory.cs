﻿using CardAssassin.Application.Services;
using CardAssassin.Infrastructure.Configuration;
using FaunaDB.Client;
using Microsoft.Extensions.Options;

namespace CardAssassin.Infrastructure.Services
{
    public class FaunaDbClientFactory: IFaunaDbClientFactory
    {
        public FaunaClient Client;
        private readonly FaunaDbConfig _config;
        public FaunaDbClientFactory(IOptions<FaunaDbConfig> options)
        {
            _config = options.Value;
        }

        public FaunaClient CreateClient()
        {
            return new FaunaClient(endpoint: _config.Endpoint, secret: _config.Secret);
        }

        //public GraphQl CreateGraphQlClient()
        //{
        //    return new FaunaClient(endpoint: _config.Endpoint, secret: _config.Secret);
        //}
    }
}
