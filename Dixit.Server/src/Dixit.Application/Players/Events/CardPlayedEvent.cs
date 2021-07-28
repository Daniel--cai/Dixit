using Dixit.Domain.Entities;
using MediatR;

namespace Dixit.Application.Players.Events
{
    public class CardSubmittedEvent : INotification
    {
        public Player Player { get; set; }
        public Card Card { get; set; }
        public string Code { get; set; }
    }
}
