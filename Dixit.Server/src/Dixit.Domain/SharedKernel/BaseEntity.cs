﻿using Dixit.Domain.Interfaces;
using System.Collections.Generic;

namespace Dixit.Domain.SharedKernel
{
    public abstract class BaseEntity: IEntity
    {
        public int Id { get; set; }
        public List<BaseDomainEvent> Events = new List<BaseDomainEvent>();
    }
}
