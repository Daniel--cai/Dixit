using Dixit.Domain.Entities;
using MediatR;

namespace Dixit.Application.Events
{
    public class StoryToldEvent : INotification
    {
        public string Description { get; set; }
        public Card Card { get; set; }
        public string Player { get; set; }
        public string Code { get; set; }
    }
}
