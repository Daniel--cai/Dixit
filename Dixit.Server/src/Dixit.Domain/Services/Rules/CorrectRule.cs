using Dixit.Domain.Entities;
using Dixit.Domain.Interfaces;
using Dixit.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Dixit.Domain.Services.Rules
{
    public class CorrectRule : IScoringRule
    {
        public List<ScoreCard> CalculateScore(List<Vote> votes, Player storyTeller, Card storyCard)
        {
            var scorers = votes.Where(vote => vote.Card.Id == storyCard.Id).Select(vote => vote.Player);

            var scoreBoard = scorers.Select(scorer => new ScoreCard(scorer, 3)).ToList();

            return scoreBoard;
        }
    }
}
