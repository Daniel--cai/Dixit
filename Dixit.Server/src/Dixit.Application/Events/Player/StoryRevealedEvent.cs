using Dixit.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Application.Events
{
    public class StoryRevealedEvent : INotification
    {
        public List<Card> Cards { get; set; }
    }
}
