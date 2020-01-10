﻿using CardAssassin.Domain.Aggregates;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CardAssassin.Application.Services
{
    public interface IRepository
    {
        void AddLobby(Lobby lobby);
        Task<Lobby> GetLobbyByCode(string code);
        Task<PlayerConnection> GetPlayerConnectionByIdentifier(string identifier);
        Task AddPlayerConnection(string name, string identifier, string code);
        Task RemovePlayerConnection(string identifier);
        Task SaveLobby(Lobby lobby);
    }
}