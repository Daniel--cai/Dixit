﻿using Dixit.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Application.Events
{
    public class LobbyJoinedEvent : INotification
    {
        public string Code { get; set; }
        public Domain.Entities.Player Player { get; set; }
    }
}
