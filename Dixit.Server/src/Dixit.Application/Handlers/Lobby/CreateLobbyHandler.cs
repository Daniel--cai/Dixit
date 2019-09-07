using Dixit.Application.Commands;
using Dixit.Application.Events;
using Dixit.Application.Responses;
using Dixit.Domain.Aggregates;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.Handlers
{
    public class CreateLobbyHandler : IRequestHandler<CreateLobbyCommand, CreateLobbyResponse>
    {
        private readonly IMediator _mediator;

        public CreateLobbyHandler(IMediator mediator)
        {
            _mediator = mediator;
        }

        public Task<CreateLobbyResponse> Handle(CreateLobbyCommand request, CancellationToken cancellationToken)
        {
            var lobby = new Lobby();
            
            _mediator.Publish(new LobbyJoinedEvent());

            return Task.FromResult(new CreateLobbyResponse
            {
                Code = lobby.Code
            });
        }
    }
}
