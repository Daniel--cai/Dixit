using Dixit.Domain.SharedKernel;

namespace Dixit.Domain.Interfaces
{
    public interface IDomainEventDispatcher
    {
        void Dispatch(BaseDomainEvent domainEvent);
    }
}
