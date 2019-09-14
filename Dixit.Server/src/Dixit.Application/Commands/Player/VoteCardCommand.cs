using Dixit.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Application.Commands
{
    public class VoteCardCommand: IRequest
    {
        public Domain.Entities.Player Player { get; set; }
        public Card Card { get; set; }
        public string Code { get; set; }
    }
}
