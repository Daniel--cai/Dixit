
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Dixit.Application.Players.Commands;
using Dixit.Application.Services;
using Dixit.Domain.Entities;
using Dixit.Domain.Interfaces;
using Dixit.Domain.ValueObjects;
using Dixit.Tests.Core.Builders;
using Dixit.Tests.Core.Fixture;
using FluentAssertions;
using MediatR;
using Moq;
using Xunit;

namespace Dixit.Tests.Integration.CommandHandlers
{
    public class PlayerVoteCardCommandTest: IClassFixture<MapperFixture>
    {
        private readonly MapperFixture _mapperFixture;
        private List<string> _players = new List<string> { "playerOne", "playerTwo", "playerThree", "playerFour", "playerFive" };

        public PlayerVoteCardCommandTest(MapperFixture mapperFixture)
        {
            _mapperFixture = mapperFixture;
        }

        [Fact]
        public async Task GameStateShouldBeVotingWhenNotAllPlayersVoted()
        {
            //arrange
            var lobby = new LobbyBuilder()
                            .WithPlayers(_players)
                            .WithRoundOne()
                            .WithPlayedCards()
                            .Build();

            var mediator = new Mock<IMediator>();
            var lobbyRepositoryMock = new Mock<ILobbyRepository>();
            lobbyRepositoryMock.Setup(lobbyRepo => lobbyRepo.GetLobbyByCode(It.IsAny<string>())).Returns(Task.FromResult(lobby));
            var lobbyRepository = lobbyRepositoryMock.Object;
            var scoreService = new Mock<IScoreService>();
            var command = new VoteCardCommandHandler(mediator.Object, scoreService.Object, lobbyRepository);
            var request = new VoteCardCommand
            {
                Card = lobby.CurrentPlayedCards.FirstOrDefault(card => card.Owner.Name != _players[1]).Id,
                Code = lobby.Code,
                Player = _players[1]
            };

            //act
            await command.Handle(request, CancellationToken.None);

            //assert
            lobby.GameState.Should().Equals(State.InProgress);
        }

        [Fact]
        public void PlayerVotingOwnCardShouldThrowInvalidOperationException()
        {
            //arrange
            var lobby = new LobbyBuilder()
                            .WithPlayers(_players)
                            .WithRoundOne()
                            .WithPlayedCards()
                            .Build();

            var mediator = new Mock<IMediator>();
            var lobbyRepositoryMock = new Mock<ILobbyRepository>();
            lobbyRepositoryMock.Setup(lobbyRepo => lobbyRepo.GetLobbyByCode(It.IsAny<string>())).Returns(Task.FromResult(lobby));
            var lobbyRepository = lobbyRepositoryMock.Object;
            var scoreService = new Mock<IScoreService>();
            var command = new VoteCardCommandHandler(mediator.Object, scoreService.Object, lobbyRepository);
            var request = new VoteCardCommand
            {
                Card = lobby.CurrentPlayedCards.FirstOrDefault(card => card.Owner.Name == _players[1]).Id,
                Code = lobby.Code,
                Player = _players[1]
            };

            //act
            Func<Task> action = async () => await command.Handle(request, CancellationToken.None);

            //assert
            action.Should().Throw<InvalidOperationException>();
        }


        [Fact]
        public async Task GameStateShouldBeStoryWhenAllPlayerVotes()
        {
            //arrange
            var lobby = new LobbyBuilder()
                            .WithPlayers(_players)
                            .WithRoundOne()
                            .WithPlayedCards()
                            .WithVotedCardsExceptPlayer(_players[4])
                            .Build();

            var mediator = new Mock<IMediator>();
            var lobbyRepositoryMock = new Mock<ILobbyRepository>();
            lobbyRepositoryMock.Setup(lobbyRepo => lobbyRepo.GetLobbyByCode(It.IsAny<string>())).Returns(Task.FromResult(lobby));
            var lobbyRepository = lobbyRepositoryMock.Object;
            var scoreService = new Mock<IScoreService>();
            scoreService.Setup(service => service.VallyVotes(It.IsAny<List<Vote>>(), It.IsAny<Player>(), It.IsAny<Card>())).Returns(new List<ScoreCard> { });
            var previousStoryTeller = lobby.CurrentStoryTeller;
            var command = new VoteCardCommandHandler(mediator.Object, scoreService.Object, lobbyRepository);
            var request = new VoteCardCommand
            {
                Card = lobby.CurrentPlayedCards.FirstOrDefault(card => card.Owner.Name != _players[4]).Id,
                Code = lobby.Code,
                Player = _players[4]
            };

            //act
            await command.Handle(request, CancellationToken.None);

            //assert
            lobby.GameState.Should().Equals(State.Story);
            lobby.CurrentStoryTeller.Should().NotBe(previousStoryTeller);
            scoreService.Verify(service => service.VallyVotes(It.IsAny<List<Vote>>(), It.IsAny<Player>(), It.IsAny<Card>()), Times.Once());
        }

    }
}
