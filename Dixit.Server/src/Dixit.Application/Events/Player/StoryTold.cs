using Dixit.Application.SharedKernel;
using Dixit.Domain.Aggregates;
using Dixit.Domain.ValueObjects;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Application.Events
{
    public class StoryTold : INotification
    {
        public string Description { get; set; }
        public string Player { get; set; }
        public string Code { get; set; }
    }
}
