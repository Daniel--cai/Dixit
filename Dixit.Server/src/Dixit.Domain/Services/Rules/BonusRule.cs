using Dixit.Domain.Entities;
using Dixit.Domain.Interfaces;
using Dixit.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Dixit.Domain.Services.Rules
{
    public class BonusRule : IScoringRule
    {
        public List<ScoreCard> CalculateScore(List<Vote> votes, Player storyTeller, Card storyCard)
        {
            return votes.Where(vote=>vote.Card.Id != storyCard.Id)
                        .Select(vote => new ScoreCard(vote.Card.Owner, 1)).ToList();
        }
    }
}
