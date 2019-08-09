using Dixit.Domain.Aggregates;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Application.SharedKernel
{
    public abstract class BaseNotification
    {
        public Lobby Lobby { get; set; }
    }
}
