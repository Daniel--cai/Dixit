using Dixit.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Application.Commands
{
    public class TellStoryCommand : IRequest
    {
        public string StoryTeller { get; set; }
        public int Card { get; set; }
        public string Story { get; set; }
        public string Code { get; set; }
    }
}
