using Dixit.Server.DTO;
using System.Threading.Tasks;

namespace Dixit.Server.RealTime.Interface
{
    public interface ILobbyEventsClient
    {
        Task LobbyJoined(LobbyJoinedDTO notification);
        Task CardDrawn(INotificationDTO notification);
    }
}
