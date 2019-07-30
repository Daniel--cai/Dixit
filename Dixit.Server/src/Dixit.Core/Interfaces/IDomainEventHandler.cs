using Dixit.Core.SharedKernel;
using MediatR;

namespace Dixit.Core.Interfaces
{
    public interface IDomainEventHandler<T> : IRequestHandler<T> where T : BaseDomainEvent
    {
        //void Handle(T domainEvent);
    }
}
