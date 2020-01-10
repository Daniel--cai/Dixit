using MediatR;

namespace CardAssassin.Application.Events
{
    public class PlayerDisconnectedEvent : INotification
    {
        public string Identifier { get; set; }
    }
}
