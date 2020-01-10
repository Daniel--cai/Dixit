using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace CardAssassin.Application.Events
{
    public class PlayerConnectedEvent : INotification
    {
        public string Player { get; set; }
        public string Identifier { get; set; }
        public string Code { get; set; }
    }
}
