using Dixit.Application.Commands;
using Dixit.Application.Events;
using Dixit.Domain.Aggregates;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.Handlers
{
    public class VoteCardHandler : IRequestHandler<VoteCardCommand>
    {
        private readonly IMediator _mediator;
        public VoteCardHandler(IMediator mediator)
        {
            _mediator = mediator;
        }
        public async Task<Unit> Handle(VoteCardCommand request, CancellationToken cancellationToken)
        {
            var lobby = new Lobby();
            await _mediator.Publish(new CardVotedEvent());

            if  (lobby.HasAllPlayersVoted())
            {
                lobby.NextStoryTeller();
                var score = lobby.TallyVotes();
                await _mediator.Publish(new RoundFinishedEvent());
            }

            return Unit.Value;
        }
    }
}
