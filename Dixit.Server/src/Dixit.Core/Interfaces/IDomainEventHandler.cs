using Dixit.Core.SharedKernel;

namespace Dixit.Core.Interfaces
{
    public interface IDomainEventHandler<T> where T : BaseDomainEvent
    {
        void Handle(T domainEvent);
    }
}
