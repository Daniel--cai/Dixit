using System;
using FaunaDB.Client;

namespace CardAssassin.Application.Services
{
    public interface IFaunaDbClientFactory
    {
        FaunaClient CreateClient();
    }
}
