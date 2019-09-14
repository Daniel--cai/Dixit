using Dixit.Domain.ValueObjects;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Application.Events
{
    public class RoundFinishedEvent : INotification
    {
        public string Code { get; set; }
        public List<ScoreCard> ScoreCards { get; set; }
    }
}
