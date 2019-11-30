using System;
using FaunaDB.Client;

namespace Dixit.Application.Services
{
    public interface IFaunaDbClientFactory
    {
        FaunaClient CreateClient();
    }
}
