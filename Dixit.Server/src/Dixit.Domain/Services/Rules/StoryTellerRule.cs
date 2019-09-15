using Dixit.Domain.Entities;
using Dixit.Domain.Interfaces;
using Dixit.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Domain.Services.Rules
{
    public class StoryTellerRule : IScoringRule
    {
        public List<ScoreCard> CalculateScore(List<Vote> votes, Player storyTeller, Card storyCard)
        {
            if (votes.Find(vote => vote.Card.Id == storyCard.Id) == null)
            {
                return new List<ScoreCard> { new ScoreCard(storyTeller, 0) };
            }
            else if (votes.FindAll(vote => vote.Card.Id == storyCard.Id).Count == votes.Count)
            {
                return new List<ScoreCard> { new ScoreCard(storyTeller, 0) };
            }
            else
            {
                return new List<ScoreCard> { new ScoreCard(storyTeller, 3) };
            }
        }
    }
}
