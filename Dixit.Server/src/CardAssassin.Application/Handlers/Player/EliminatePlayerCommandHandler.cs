using CardAssassin.Application.Commands;
using CardAssassin.Application.Events;
using CardAssassin.Application.Responses;
using CardAssassin.Application.Services;
using CardAssassin.Domain.Aggregates;
using CardAssassin.Domain.Interfaces;
using MediatR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CardAssassin.Application.Handlers
{
    public class EliminatePlayerCommandHandler : IRequestHandler<EliminatePlayerCommand, EliminatePlayerResponse>
    {
        private readonly IMediator _mediator;
        private readonly IRepository _faunaDbService;

        public EliminatePlayerCommandHandler(IMediator mediator, IRepository faunaDbService)
        {
            _mediator = mediator;
            _faunaDbService = faunaDbService;
        }
        public async Task<EliminatePlayerResponse> Handle(EliminatePlayerCommand request, CancellationToken cancellationToken)
        {
            var lobby = await _faunaDbService.GetLobbyByCode(request.Code);

            var player = lobby.GetPlayerByName(request.Player);
            lobby.EliminateTarget(player);
            await _faunaDbService.SaveLobby(lobby);
            return new EliminatePlayerResponse
            {
                Target = player.Target,
                Words = player.Words
            };
        }
    }
}
