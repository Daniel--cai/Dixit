﻿using Dixit.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Application.Commands
{
    public class VoteCardCommand: IRequest
    {
        public string Player { get; set; }
        public int Card { get; set; }
        public string Code { get; set; }
    }
}
