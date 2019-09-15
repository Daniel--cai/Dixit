using Dixit.Domain.Entities;
using Dixit.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Domain.Interfaces
{
    public interface IScoringRule
    {
        List<ScoreCard> CalculateScore(List<Vote> votes, Player storyTeller, Card storyCard);
    }
}
