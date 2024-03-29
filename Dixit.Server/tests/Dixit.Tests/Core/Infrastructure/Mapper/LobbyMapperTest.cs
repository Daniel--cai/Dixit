﻿using System.Collections.Generic;
using Dixit.Tests.Core.Fixture;
using Xunit;
using FluentAssertions;
using Dixit.Tests.Core.Builders;
using System.Linq;
using Dixit.Infrastructure.Data.Model;
using Dixit.Infrastructure.Data.Mapping;

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
        public void ReverseMapAggregateInitialGame_ShouldReturnSameLobby()
        {
            //arrange
            var lobbyMapper = new LobbyMapper(_mapperFixture.GetLobbyMapper());
            var lobby = new LobbyBuilder()
                            .WithPlayers(_players)
                            .Build();

            lobby.NewRound();
            lobby.DealDeck();

            //act
            var data = lobbyMapper.Map(lobby);
            var lobbyReversed = lobbyMapper.Map(lobbyMapper.Map(lobby));

            //assert
            
            lobby.Should().BeEquivalentTo(lobbyReversed);
            lobby.Rounds.Count.Should().Be(1);
        }

        [Fact]
        public void ReverseMapAggregateWithRounds_ShouldReturnSameLobby()
        {
            //arrange
            var lobbyMapper = new LobbyMapper(_mapperFixture.GetLobbyMapper());
            var lobby = new LobbyBuilder()
                            .WithPlayers(_players)
                            .WithRoundOne()
                            .WithPlayedCards()
                            .WithVotedCards()
                            .Build();

            //act
            var data = lobbyMapper.Map(lobby);
            var lobbyReversed = lobbyMapper.Map(lobbyMapper.Map(lobby));

            //assert
            lobby.Should().BeEquivalentTo(lobbyReversed);
            lobby.Rounds.Count.Should().Be(1);
            lobby.CurrentStoryCard.Owner.Should().NotBeNull();
            lobby.CurrentStoryCard.Owner.Should().BeEquivalentTo(lobby.CurrentStoryTeller);
        }

        [Fact]
        public void ReverseMapDataWithRounds_ShouldReturnSameLobby()
        {
            //arrange
            var lobbyMapper = new LobbyMapper(_mapperFixture.GetLobbyMapper());
            var lobby = new LobbyBuilder()
                            .WithPlayers(_players)
                            .WithRoundOne()
                            .WithPlayedCards()
                            .WithVotedCards()
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
                            .WithPlayedCards()
                            .WithVotedCards()
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
                            .WithPlayedCards()
                            .WithVotedCards()
                            .WithRoundTwo()
                            .Build();

            //act
            var data = lobbyMapper.Map(lobby);

            //assert
            var round = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Round>>(data.Rounds).Last();
            round.Story.Should().Equals(lobby.CurrentRound.Story);
            round.StoryTeller.Should().Equals(lobby.CurrentRound.StoryTeller);
            round.StoryTellerCard.Should().Equals(lobby.CurrentRound.StoryTellerCard);
            round.StoryTellerCard.Should().Equals(lobby.CurrentRound.StoryTellerCard);
        }

        [Fact]
        public void AggregateLobbyStoryTellerShouldEqualDataStoryTellerOwner()
        {
            //arrange
            var lobbyMapper = new LobbyMapper(_mapperFixture.GetLobbyMapper());
            var lobby = new LobbyBuilder()
                            .WithPlayers(_players)
                            .WithRoundOne()
                            .WithPlayedCards()
                            .Build();

            //act
            var lobbyReversed = lobbyMapper.Map(lobbyMapper.Map(lobby));

            //assert
            lobbyReversed.CurrentRound.Story.Should().Equals(lobby.CurrentRound.Story);
            lobbyReversed.CurrentRound.StoryTeller.Should().Equals(lobby.CurrentRound.StoryTeller);
            lobbyReversed.CurrentRound.StoryTellerCard.Should().Equals(lobby.CurrentRound.StoryTellerCard);
            lobbyReversed.CurrentRound.StoryTellerCard.Owner.Should().Be(lobby.CurrentRound.StoryTeller);
            lobbyReversed.CurrentRound.StoryTellerCard.Owner.Should().NotBeNull();
        }
    }
}
