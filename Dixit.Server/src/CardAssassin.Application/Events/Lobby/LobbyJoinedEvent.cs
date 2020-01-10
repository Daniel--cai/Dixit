using CardAssassin.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace CardAssassin.Application.Events
{
    public class LobbyJoinedEvent : INotification
    {
        public string Code { get; set; }
        public Player Player { get; set; }
    }
}
