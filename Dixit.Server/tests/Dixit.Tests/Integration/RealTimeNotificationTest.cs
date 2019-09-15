using AutoFixture;
using Dixit.Application.Events;
using Dixit.Server.DTO;
using Dixit.Server.RealTime;
using Dixit.Server.RealTime.Interface;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.DependencyInjection;
using Moq;
using System.Threading.Tasks;
using Xunit;

namespace Dixit.Tests.Integration
{
    public class RealTimeNotificationTest
    {
        [Fact]
        public async Task LobbyEventsDispatcherShouldDispatchToHub()
        {
            var hubContext = new Mock<IHubContext<LobbyEventsClientHub, IEventsClient>>();
            var lobbyClients = new Mock<IEventsClient>();

            hubContext.Setup(x => x.Clients.All.LobbyJoined(It.IsAny<LobbyJoinedDTO>())).Returns(Task.FromResult(0));

            ServiceCollection service = new ServiceCollection();

            service.AddMediatR(typeof(LobbyEventsClientDispatcher));
            service.AddScoped(provider => hubContext.Object);

            var serviceProvider = service.BuildServiceProvider();
            var mediator = serviceProvider.GetRequiredService<IMediator>();

            var fixture = new Fixture();

            await mediator.Publish(fixture.Create<LobbyJoinedEvent>());
            await mediator.Publish(fixture.Create<LobbyStartedEvent>());

            await mediator.Publish(fixture.Create<RoundFinishedEvent>());
            await mediator.Publish(fixture.Create<StoryRevealedEvent>());

            await mediator.Publish(fixture.Create<CardVotedEvent>());
            await mediator.Publish(fixture.Create<CardSubmittedEvent>());
            await mediator.Publish(fixture.Create<CardDrawnEvent>());
            await mediator.Publish(fixture.Create<StoryToldEvent>());

            hubContext.Verify(mock => mock.Clients.All.LobbyJoined(It.IsAny<LobbyJoinedDTO>()), Times.Once());
            hubContext.Verify(mock => mock.Clients.All.LobbyStarted(It.IsAny<LobbyStartedDTO>()), Times.Once());
            hubContext.Verify(mock => mock.Clients.All.RoundFinished(It.IsAny<RoundFinishedDTO>()), Times.Once());
            hubContext.Verify(mock => mock.Clients.All.StoryRevealed(It.IsAny<StoryRevealedDTO>()), Times.Once());
            hubContext.Verify(mock => mock.Clients.All.CardVoted(It.IsAny<CardVotedDTO>()), Times.Once());
            hubContext.Verify(mock => mock.Clients.All.CardPlayed(It.IsAny<CardPlayedDTO>()), Times.Once());
            hubContext.Verify(mock => mock.Clients.All.CardDrawn(It.IsAny<CardDrawnDTO>()), Times.Once());
            hubContext.Verify(mock => mock.Clients.All.StoryTold(It.IsAny<StoryToldDTO>()), Times.Once());
        }
    }
}

