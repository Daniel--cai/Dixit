
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using Dixit.Domain.Entities;

namespace Dixit.Application.Events
{
    public class CardVoted : INotification
    {
        public Player Player { get; set; }
        public Card Card  {get;set;}
        public string Code { get; set; }
    }
}
