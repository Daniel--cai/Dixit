﻿using AutoFixture;
using Dixit.Application.Events;
using Dixit.Application.Lobbies.Events;
using Dixit.Application.Players.Events;
using Dixit.Server.Notification.Dispatchers;
using Dixit.Server.Notification.Hub;
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

            hubContext.Setup(x => x.Clients.All.LobbyJoined(It.IsAny<LobbyJoined>())).Returns(Task.FromResult(0));
            hubContext.Setup(x => x.Clients.All.LobbyLeft(It.IsAny<LobbyLeft>())).Returns(Task.FromResult(0));
            hubContext.Setup(x => x.Clients.Client(It.IsAny<string>()).CardDrawn(It.IsAny<CardDrawn>())).Returns(Task.FromResult(0));
            
            ServiceCollection service = new ServiceCollection();

            service.AddMediatR(typeof(LobbyEventsClientDispatcher));
            service.AddScoped(provider => hubContext.Object);

            var serviceProvider = service.BuildServiceProvider();
            var mediator = serviceProvider.GetRequiredService<IMediator>();

            var fixture = new Fixture();

            await mediator.Publish(fixture.Create<LobbyJoinedEvent>());
            await mediator.Publish(fixture.Create<LobbyStartedEvent>());
            await mediator.Publish(fixture.Create<LobbyLeaveEvent>());
            

            await mediator.Publish(fixture.Create<RoundFinishedEvent>());
            await mediator.Publish(fixture.Create<StoryRevealedEvent>());

            await mediator.Publish(fixture.Create<CardVotedEvent>());
            await mediator.Publish(fixture.Create<CardSubmittedEvent>());
            await mediator.Publish(fixture.Create<CardDrawnEvent>());
            await mediator.Publish(fixture.Create<StoryToldEvent>());

            hubContext.Verify(mock => mock.Clients.All.LobbyJoined(It.IsAny<LobbyJoined>()), Times.Once());
            hubContext.Verify(mock => mock.Clients.All.LobbyStarted(It.IsAny<LobbyStarted>()), Times.Once());
            hubContext.Verify(mock => mock.Clients.All.RoundFinished(It.IsAny<RoundFinished>()), Times.Once());
            hubContext.Verify(mock => mock.Clients.All.StoryRevealed(It.IsAny<StoryRevealed>()), Times.Once());
            hubContext.Verify(mock => mock.Clients.All.CardVoted(It.IsAny<CardVoted>()), Times.Once());
            hubContext.Verify(mock => mock.Clients.All.CardPlayed(It.IsAny<CardPlayed>()), Times.Once());
            hubContext.Verify(mock => mock.Clients.Client(It.IsAny<string>()).CardDrawn(It.IsAny<CardDrawn>()), Times.Once());
            hubContext.Verify(mock => mock.Clients.All.StoryTold(It.IsAny<StoryTold>()), Times.Once());
            hubContext.Verify(mock => mock.Clients.All.LobbyLeft(It.IsAny<LobbyLeft>()), Times.Once());
        }
    }
}

