using Dixit.Application.Commands;
using Dixit.Application.Events;
using Dixit.Application.Responses;
using Dixit.Application.Services;
using Dixit.Domain.Aggregates;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.Handlers
{
    public class CreateLobbyCommandHandler : IRequestHandler<CreateLobbyCommand, CreateLobbyResponse>
    {
        private readonly IMediator _mediator;
        private readonly IRepository _awsDynamodbService;

        public CreateLobbyCommandHandler(IMediator mediator, IRepository awsDynamodbService)
        {
            _mediator = mediator;
            _awsDynamodbService = awsDynamodbService;
        }

        public async Task<CreateLobbyResponse> Handle(CreateLobbyCommand request, CancellationToken cancellationToken)
        {
            var lobby = new Lobby();
            //var player = new Domain.Entities.Player(request.Name);
            //lobby.Players.Add(player);
            var code = await _awsDynamodbService.AddLobby(lobby);
            return new CreateLobbyResponse
            {
                Code = code
            };
        }
    }
}
