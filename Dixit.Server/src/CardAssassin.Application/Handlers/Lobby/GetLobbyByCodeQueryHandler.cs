using CardAssassin.Application.Queries;
using CardAssassin.Application.Services;
using CardAssassin.Domain.Aggregates;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CardAssassin.Application.Handlers
{
    public class GetLobbyByCodeQueryHandler : IRequestHandler<GetLobbyByCodeQuery, Lobby>
    {
        private readonly IRepository _awsDynamodbService;

        public GetLobbyByCodeQueryHandler(IRepository awsDynamodbService)
        {
            _awsDynamodbService = awsDynamodbService;
        }
        public async Task<Lobby> Handle(GetLobbyByCodeQuery request, CancellationToken cancellationToken)
        {
            return await _awsDynamodbService.GetLobbyByCode(request.Code);
        }
    }
}
