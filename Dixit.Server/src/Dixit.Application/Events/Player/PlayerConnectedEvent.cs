﻿using MediatR;

namespace Dixit.Application.Events
{
    public class PlayerConnectedEvent : INotification
    {
        public string Player { get; set; }
        public string Identifier { get; set; }
        public string Code { get; set; }
    }
}
