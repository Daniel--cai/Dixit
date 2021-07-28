using MediatR;

namespace Dixit.Application.Players.Events
{
    public class PlayerDisconnectedEvent : INotification
    {
        public string Identifier { get; set; }
    }
}
