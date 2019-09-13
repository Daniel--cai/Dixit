﻿using Dixit.Server.RealTime.DTO;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.RealTime.Interface
{
    public interface ILobbyEventsClient
    {
        Task LobbyJoined(LobbyJoinedDTO notification);
        Task CardDrawn(INotificationDTO notification);
    }
}
