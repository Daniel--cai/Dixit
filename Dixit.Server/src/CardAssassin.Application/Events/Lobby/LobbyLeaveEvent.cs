using CardAssassin.Domain.Entities;
using MediatR;

namespace CardAssassin.Application.Events
{
    public class LobbyLeaveEvent : INotification
    {
        public string Code { get; set; }
        public Player Player { get; set; }
    }
}
