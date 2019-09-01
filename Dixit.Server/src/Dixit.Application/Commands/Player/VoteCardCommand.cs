using Dixit.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Application.Commands.Player
{
    public class VoteCardCommand
    {
        public Domain.Entities.Player Player { get; set; }
        public Card Card { get; set; }
        public string Code { get; set; }
    }
}
