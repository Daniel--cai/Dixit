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
    public class VoteCardCommandHandler : IRequestHandler<VoteCardCommand>
    {
        private readonly IMediator _mediator;
        private readonly IScoreService _scoreService;
        private readonly ILobbyRepository _lobbyRepository;

        public VoteCardCommandHandler(IMediator mediator, IScoreService scoreService, ILobbyRepository lobbyRepository)
        {
            _mediator = mediator;
            _scoreService = scoreService;
            _lobbyRepository = lobbyRepository;
        }
        public async Task<Unit> Handle(VoteCardCommand request, CancellationToken cancellationToken)
        {
            var lobby = await _lobbyRepository.GetLobbyByCode(request.Code);

            var card = lobby.GetCard(request.Card);
            var player = lobby.GetPlayerByName(request.Player);

            lobby.PlayerVoteCard(player, card);

            await _mediator.Publish(new CardVotedEvent { Code = request.Code, Player = player, Card = card });

            if  (lobby.HasAllPlayersVoted())
            {
                var votes = lobby.CurrentVotes;
                var storyCard = lobby.CurrentStoryCard;
                var storyTeller = lobby.CurrentStoryTeller;
                var score = _scoreService.VallyVotes(votes, storyTeller, storyCard);

                lobby.TallyVotes(score);
                lobby.NewRound();

                var roundFinishedEvent = new RoundFinishedEvent
                {
                    Code = lobby.Code,
                    PlayerScores = score,
                    Votes = votes.ToList(),
                    NextStoryTeller = lobby.CurrentStoryTeller,
                    StoryCard = storyCard
                };

                var tasks = lobby.ActivePlayers.Select(p => _mediator.Publish(new CardDrawnEvent { Code = request.Code, Player = p, Hand = lobby.Deck.Hand(p) }));
                await Task.WhenAll(tasks);
                await _mediator.Publish(roundFinishedEvent);

            }
            await _lobbyRepository.SaveLobby(lobby);
            return Unit.Value;
        }
    }
}
