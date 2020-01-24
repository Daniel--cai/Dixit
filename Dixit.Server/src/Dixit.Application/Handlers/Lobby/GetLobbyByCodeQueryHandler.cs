using Dixit.Application.Queries;
using Dixit.Application.Services;
using Dixit.Domain.Aggregates;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.Handlers
{
    public class GetLobbyByCodeQueryHandler : IRequestHandler<GetLobbyByCodeQuery, Lobby>
    {
        private readonly ILobbyRepository _lobbyRepository;

        public GetLobbyByCodeQueryHandler(ILobbyRepository lobbyRepository)
        {
            _lobbyRepository = lobbyRepository;
        }
        public async Task<Lobby> Handle(GetLobbyByCodeQuery request, CancellationToken cancellationToken)
        {
            return await _lobbyRepository.GetLobbyByCode(request.Code);
        }
    }
}
