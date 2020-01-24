using Dixit.Domain.Aggregates;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Dixit.Application.Services
{
    public interface ILobbyRepository
    {
        Task<string> AddLobby(Lobby lobby);
        Task<Lobby> GetLobbyByCode(string code);
        Task SaveLobby(Lobby lobby);
    }
}