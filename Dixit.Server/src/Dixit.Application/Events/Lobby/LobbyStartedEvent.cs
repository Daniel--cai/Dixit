using Dixit.Domain.Entities;
using MediatR;

namespace Dixit.Application.Events
{
    public class LobbyStartedEvent : INotification
    {
        public string Code { get; set; }
        public Player StoryTeller { get; set; }
    }
}
