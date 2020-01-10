using System;
using System.Collections.Generic;
using CardAssassin.Domain.Aggregates;
using CardAssassin.Domain.Entities;
using CardAssassin.Domain.ValueObjects;

namespace CardAssassin.Tests.Fixtures
{
    public class LobbyFixture : IDisposable
    {
        public Lobby Lobby { get; set; }

        public Lobby SetupLobby()
        {
            var player1 = new Player("player1", "1");
            var player2 = new Player("player2", "2");
            var player3 = new Player("player3", "3");
            var player4 = new Player("player4", "4");
            var lobby = new Lobby();

            lobby.Players.Add(player1);
            lobby.Players.Add(player2);
            lobby.Players.Add(player3);
            lobby.Players.Add(player4);

            Lobby = lobby;

            return lobby;
        }

        public Lobby SetupInitialisedLobby()
        {
            var lobby = SetupLobby();

            var assignedTargets = new List<AssignedTarget>
            {
                new AssignedTarget { Player = "player1", Target = "player2" },
                new AssignedTarget { Player = "player2", Target = "player3" },
                new AssignedTarget { Player = "player3", Target = "player4" },
                new AssignedTarget { Player = "player4", Target = "player1" }
            };

            var assignedWords = new List<AssignedWords>
            {
                new AssignedWords { Player = "player1", Words = new List<string> { "one", "two", "three" } },
                new AssignedWords { Player = "player2", Words = new List<string> { "one", "two", "three" } },
                new AssignedWords { Player = "player3", Words = new List<string> { "one", "two", "three" } },
                new AssignedWords { Player = "player4", Words = new List<string> { "one", "two", "three" } }
            };

            lobby.AssignTargets(assignedTargets);
            lobby.AssignWords(assignedWords);

            Lobby = lobby;

            return lobby;
        }

        public Player GetPlayer()
        {
            return Lobby.GetPlayerByName("player1");
        }

        public Player GetAnotherPlayer()
        {
            return Lobby.GetPlayerByName("player2");
        }

        public void Dispose()
        {
        }
    }
}
