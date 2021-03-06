﻿
namespace Dixit.Domain.ValueObjects
{
    public class State : Enumeration
    {
        public static readonly State Lobby = new LobbyState(0, "Lobby");
        public static readonly State InProgress = new State(1, "InProgress");
        public static readonly State Story = new State(2, "Story");
        public static readonly State Voting = new State(3, "Voting");
        public static readonly State GameOver = new State(4, "GameOver");

        public State() { }
        public State(int value, string displayName) : base(value, displayName) { }
    };

    public class LobbyState : State
    {
        public LobbyState(int value, string displayName) : base(value, displayName)
        {

        }
    }
}
