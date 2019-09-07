using Dixit.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Domain.ValueObjects
{
    public class ScoreCard
    {
        public string PlayerName { get; set; }
        public int Score { get; set; }
    }
}
