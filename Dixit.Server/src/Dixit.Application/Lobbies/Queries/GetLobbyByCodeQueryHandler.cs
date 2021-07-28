using Dixit.Application.Services;
using Dixit.Domain.Aggregates;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.Lobbies.Queries
{
    public class GetLobbyByCodeQuery : IRequest<Lobby>
    {
        public string Code { get; set; }
        public string Player { get; set; }
    }

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
