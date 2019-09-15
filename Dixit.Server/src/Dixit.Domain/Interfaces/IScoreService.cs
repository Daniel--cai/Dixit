using Dixit.Domain.Entities;
using Dixit.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Domain.Interfaces
{
    public interface IScoreService
    {
        List<ScoreCard> VallyVotes(List<Vote> votes, Player storyTeller, Card storyCard);
    }
}
