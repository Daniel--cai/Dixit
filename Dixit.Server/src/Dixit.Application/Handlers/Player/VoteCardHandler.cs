using Dixit.Application.Commands;
using Dixit.Application.Events;
using Dixit.Application.Services;
using Dixit.Domain.Aggregates;
using Dixit.Domain.Interfaces;
using MediatR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.Handlers
{
    public class VoteCardHandler : IRequestHandler<VoteCardCommand>
    {
        private readonly IMediator _mediator;
        private readonly IScoreService _scoreService;
        private readonly IAwsDynamodbService _awsDynamodbService;

        public VoteCardHandler(IMediator mediator, IScoreService scoreService, IAwsDynamodbService awsDynamodbService)
        {
            _mediator = mediator;
            _scoreService = scoreService;
            _awsDynamodbService = awsDynamodbService;
        }
        public async Task<Unit> Handle(VoteCardCommand request, CancellationToken cancellationToken)
        {
            var lobby = await _awsDynamodbService.GetLobbyByCode(request.Code);

            var card = lobby.GetCard(request.Card);
            var player = lobby.GetPlayerByName(request.Player);
            await _mediator.Publish(new CardVotedEvent { Code = request.Code, Player = player, Card = card });

            if  (lobby.HasAllPlayersVoted())
            {
                var votes = lobby.CurrentRound().Votes;
                var storyCard = lobby.CurrentRound().StoryTellerCard;
                var storyTeller = lobby.CurrentRound().StoryTeller;
                var score = _scoreService.VallyVotes(votes, storyTeller, storyCard);
                lobby.TallyVotes(score);
                lobby.NextRound();
                var roundFinishedEvent = new RoundFinishedEvent
                {
                    Code = lobby.Code,
                    PlayerScores = score,
                    Votes = votes.ToList(),
                    NextStoryTeller = lobby.CurrentRound().StoryTeller,
                    StoryCard = storyCard
                };
                await _mediator.Publish(roundFinishedEvent);
            }

            return Unit.Value;
        }
    }
}
