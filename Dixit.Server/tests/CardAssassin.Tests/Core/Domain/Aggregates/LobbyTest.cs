using CardAssassin.Domain.Aggregates;
using CardAssassin.Domain.Entities;
using CardAssassin.Domain.ValueObjects;
using CardAssassin.Tests.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xunit;

namespace CardAssassin.Tests.Core.Domain.Aggregates
{

    public class LobbyTest : IClassFixture<LobbyFixture> 
    {

        private readonly LobbyFixture _lobbyFixture;

        public LobbyTest(LobbyFixture lobbyFixture)
        {
            _lobbyFixture = lobbyFixture;
        }

        [Fact]
        public void EliminateTarget_ShouldMergeTargetWords()
        {
            //arrange
            var lobby = _lobbyFixture.SetupInitialisedLobby();

            //act
            lobby.EliminateTarget(_lobbyFixture.GetPlayer());

            //assert
            var expected = 6;
            var actual = lobby.GetPlayerByName(_lobbyFixture.GetPlayer().Name).Words.Count;
            Assert.Equal(expected, actual);
        }
    }
}
