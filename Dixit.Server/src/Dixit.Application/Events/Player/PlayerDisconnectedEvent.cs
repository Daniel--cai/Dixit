using MediatR;

namespace Dixit.Application.Events
{
    public class PlayerDisconnectedEvent : INotification
    {
        public string Identifier { get; set; }
    }
}
