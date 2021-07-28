using System.Threading.Tasks;
using Dixit.Server.Notification.Dispatchers;

namespace Dixit.Server.Notification.Hub
{
    public interface ILobbyEventsClient
    {
        Task LobbyJoined(LobbyJoined notification);
        Task LobbyLeft(LobbyLeft notification);
        Task LobbyStarted(LobbyStarted notification);
    }
}
