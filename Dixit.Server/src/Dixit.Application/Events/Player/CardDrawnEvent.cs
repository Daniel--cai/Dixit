using Dixit.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Application.Events.Player
{
    public class CardDrawnEvent : INotification
    {
        public Domain.Entities.Player Player { get; set; }
        public Card Card { get; set; }
        public string Code { get; set; }
    }
}
