using Dixit.Domain.Entities;
using Dixit.Domain.Interfaces;
using Dixit.Domain.Services.Rules;
using Dixit.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Dixit.Domain.Services
{
    public class ScoreService : IScoreService
    {
        private readonly IEnumerable<IScoringRule> _rules;

        public ScoreService(IEnumerable<IScoringRule> rules)
        {
            _rules = rules;
        }

        public List<ScoreCard> VallyVotes(List<Vote> votes, Player storyTeller, Card storyCard)
        {
            var scoreBoards = _rules.SelectMany(rule => rule.CalculateScore(votes, storyTeller, storyCard));

            scoreBoards = scoreBoards.GroupBy(scoreBoard => scoreBoard.Player).Select(scorer =>
                new ScoreCard(scorer.First().Player, scorer.Sum(score => score.Score)));

            return scoreBoards.ToList();
        }
    }
}
