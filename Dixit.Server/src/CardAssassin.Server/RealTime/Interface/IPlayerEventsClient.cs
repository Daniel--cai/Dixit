﻿using CardAssassin.Server.DTO;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardAssassin.Server.RealTime.Interface
{
    public interface IPlayerEventsClient
    {
        Task StoryTold(StoryToldDTO notification);
        Task CardVoted(CardVotedDTO notification);
        Task CardPlayed(CardPlayedDTO notification);
        Task CardDrawn(CardDrawnDTO notification);
    }
}
