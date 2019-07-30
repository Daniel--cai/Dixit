using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Core.Events
{
    public class LobbyCreatedEvent : INotification
    {
        public string Code
    }
}
