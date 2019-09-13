﻿using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.RealTime.Interface
{
    public interface IGameEventsClient
    {
        Task RoundFinished(INotificationDTO notification);

    }
}
