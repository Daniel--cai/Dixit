using Dixit.Domain.Entities;
using MediatR;

namespace Dixit.Application.Events
{
    public class LobbyLeaveEvent : INotification
    {
        public string Code { get; set; }
        public Player Player { get; set; }
    }
}
