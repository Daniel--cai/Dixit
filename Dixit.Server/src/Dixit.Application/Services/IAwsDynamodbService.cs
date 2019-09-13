using Dixit.Domain.Aggregates;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Dixit.Application.Services
{
    public interface IAwsDynamodbService
    {
        void AddLobby(Lobby lobby);
        Lobby GetLobbyByCode(string code);
        Task SaveLobby(Lobby lobby);
    }
}
