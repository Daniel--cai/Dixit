
namespace CardAssassin.Domain.ValueObjects
{
    public class State : Enumeration
    {
        public static readonly State Lobby = new LobbyState(0, "Lobby");
        public static readonly State InProgress = new State(1, "InProgress");
        public static readonly State GameOver = new State(2, "GameOver");

        protected State() { }
        protected State(int value, string displayName) : base(value, displayName) { }
    };

    public class LobbyState : State
    {
        public LobbyState(int value, string displayName) : base(value, displayName)
        {

        }
    }
}
