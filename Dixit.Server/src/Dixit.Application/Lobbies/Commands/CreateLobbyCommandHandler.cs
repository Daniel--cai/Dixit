using Dixit.Application.Events;
using Dixit.Application.Responses;
using Dixit.Application.Services;
using Dixit.Domain.Aggregates;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.GameLobby
{
    public class CreateLobbyCommand : IRequest<CreateLobbyResponse>
    {
        //public string Name { get; set; }
    }

    public class CreateLobbyCommandHandler : IRequestHandler<CreateLobbyCommand, CreateLobbyResponse>
    {
        private readonly IMediator _mediator;
        private readonly ILobbyRepository _lobbyRepository;

        public CreateLobbyCommandHandler(IMediator mediator, ILobbyRepository lobbyRepository)
        {
            _mediator = mediator;
            _lobbyRepository = lobbyRepository;
        }

        public async Task<CreateLobbyResponse> Handle(CreateLobbyCommand request, CancellationToken cancellationToken)
        {
            var lobby = new Lobby();
            //var player = new Domain.Entities.Player(request.Name);
            //lobby.Players.Add(player);
            var code = await _lobbyRepository.AddLobby(lobby);
            return new CreateLobbyResponse
            {
                Code = code
            };
        }
    }
}
