using CardAssassin.Domain.Interfaces;
using System.Collections.Generic;

namespace CardAssassin.Application.SharedKernel
{
    public abstract class BaseEntity: IEntity
    {
        public int Id { get; set; }
    }
}
