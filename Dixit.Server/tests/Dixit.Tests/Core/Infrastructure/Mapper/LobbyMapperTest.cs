﻿using System.Collections.Generic;
using Dixit.Infrastructure.Mapper;
using Dixit.Tests.Core.Fixture;
using Xunit;
using FluentAssertions;
using Dixit.Tests.Core.Builders;
using System.Linq;

namespace Dixit.Tests.Core.Infrastructure.Mapper
{
    public class LobbyMapperTest : IClassFixture<MapperFixture>
    {

        private readonly MapperFixture _mapperFixture;
        private List<string> _players = new List<string> { "playerOne", "playerTwo", "playerThree", "playerFour", "playerFive" };

        public LobbyMapperTest(MapperFixture mapperFixture)
        {
            _mapperFixture = mapperFixture;
        }

        [Fact]
        public void ReverseMapAggregateWithRounds_ShouldReturnSameLobby()
        {
            //arrange
            var lobbyMapper = new LobbyMapper(_mapperFixture.GetLobbyMapper());
            var lobby = new LobbyBuilder()
                            .WithPlayers(_players)
                            .WithRoundOne()
                            .WithRoundTwo()
                            .Build();

            //act
            var lobbyReversed = lobbyMapper.Map(lobbyMapper.Map(lobby));

            //assert
            lobby.Should().BeEquivalentTo(lobbyReversed);
        }

        [Fact]
        public void ReverseMapDataWithRounds_ShouldReturnSameLobby()
        {
            //arrange
            var lobbyMapper = new LobbyMapper(_mapperFixture.GetLobbyMapper());
            var lobby = new LobbyBuilder()
                            .WithPlayers(_players)
                            .WithRoundOne()
                            .WithRoundTwo()
                            .Build();
            var data = lobbyMapper.Map(lobby);

            //act
            var dataReversed = lobbyMapper.Map(lobbyMapper.Map(data));

            //assert
            data.Should().BeEquivalentTo(dataReversed);
        }

        [Fact]
        public void AggregateLobbyGameState_ShouldEqualDataLobbyGameState()
        {
            //arrange
            var lobbyMapper = new LobbyMapper(_mapperFixture.GetLobbyMapper());
            var lobby = new LobbyBuilder()
                            .WithPlayers(_players)
                            .WithRoundOne()
                            .Build();
            //act
            var data = lobbyMapper.Map(lobby);

            //assert
            data.GameState.Should().Equals(lobby.GameState);
        }

        [Fact]
        public void AggregateLobbyStoryTellerShouldEqualDataStoryTeller()
        {
            //arrange
            var lobbyMapper = new LobbyMapper(_mapperFixture.GetLobbyMapper());
            var lobby = new LobbyBuilder()
                            .WithPlayers(_players)
                            .WithRoundOne()
                            .WithRoundTwo()
                            .Build();

            //act
            var data = lobbyMapper.Map(lobby);

            //assert
            var round = data.Rounds.Last();
            round.Story.Should().Equals(lobby.CurrentRound.Story);
            round.StoryTeller.Should().Equals(lobby.CurrentRound.StoryTeller);
            round.StoryTellerCard.Should().Equals(lobby.CurrentRound.StoryTellerCard);
        }
    }
}
