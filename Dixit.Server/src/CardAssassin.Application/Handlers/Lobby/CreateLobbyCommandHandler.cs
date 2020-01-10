using CardAssassin.Application.Commands;
using CardAssassin.Application.Events;
using CardAssassin.Application.Responses;
using CardAssassin.Application.Services;
using CardAssassin.Domain.Aggregates;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace CardAssassin.Application.Handlers
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

        public Task<CreateLobbyResponse> Handle(CreateLobbyCommand request, CancellationToken cancellationToken)
        {
            var lobby = new Lobby();
            //var player = new Domain.Entities.Player(request.Name);
            //lobby.Players.Add(player);
            _awsDynamodbService.AddLobby(lobby);
            return Task.FromResult(new CreateLobbyResponse
            {
                Code = lobby.Code
            });
        }
    }
}
