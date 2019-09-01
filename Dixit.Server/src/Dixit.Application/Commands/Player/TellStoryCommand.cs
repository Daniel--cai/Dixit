using Dixit.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Application.Commands.Player
{
    public class TellStoryCommand : IRequest
    {
        public Domain.Entities.Player StoryTeller { get; set; }
        public Card Card { get; set; }
        public string Story { get; set; }
        public string Code { get; set; }
    }
}
