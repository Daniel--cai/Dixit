using CardAssassin.Server.DTO;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardAssassin.Server.RealTime.Interface
{
    public interface IGameEventsClient
    {
        Task RoundFinished(RoundFinishedDTO notification);
        Task StoryRevealed(StoryRevealedDTO notification);
    }
}
