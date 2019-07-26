using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Core.SharedKernel
{
    public abstract class BaseEntity
    {
        public Guid Id { get; set; }
        public List<BaseDomainEvent> Events = new List<BaseDomainEvent>();
    }
}
