using Dixit.Domain.Entities;
using Dixit.Domain.ValueObjects;
using MediatR;
using System.Collections.Generic;

namespace Dixit.Application.Events
{
    public class LobbyStartedEvent : INotification
    {
        public string Code { get; set; }
        public Player StoryTeller { get; set; }
        public List<Player> Players { get; set; }
    }
}
