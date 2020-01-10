using CardAssassin.Domain.Entities;
using CardAssassin.Domain.ValueObjects;
using MediatR;
using System.Collections.Generic;

namespace CardAssassin.Application.Events
{
    public class LobbyStartedEvent : INotification
    {
        public string Code { get; set; }
        public Player Player { get; set; }
    }
}
