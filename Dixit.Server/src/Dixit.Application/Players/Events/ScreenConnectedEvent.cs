using MediatR;

namespace Dixit.Application.Players.Events
{
    public class ScreenConnectedEvent : INotification
    {
        public string Identifier { get; set; }
        public string Code { get; set; }
    }
}
