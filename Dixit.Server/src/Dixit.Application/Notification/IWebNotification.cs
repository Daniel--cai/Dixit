using System;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.Notification
{
    public interface IWebNotification<T>
    {
        Task SendAsync(T message, CancellationToken cancellationToken = default);
    }
}
