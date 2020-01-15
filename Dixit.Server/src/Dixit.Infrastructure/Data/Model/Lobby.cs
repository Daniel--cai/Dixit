﻿using Amazon.DynamoDBv2.DataModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dixit.Infrastructure.Data.Model
{
    public class Lobby : IEquatable<Lobby>
    {
        public int Id  { get; set; }
        public string Code { get; set; }
        public List<Round> Rounds { get; set; } = new List<Round>();
        public int RoundNumber { get; set; }
        public List<int> Deck { get; set; } = new List<int>();
        public List<int> Discard { get; set; } = new List<int>();
        public List<Player> Players { get; set; }
        public string GameState { get; set; }

        public bool Equals(Lobby other)
        {
            if (other is null) return false;
            if (ReferenceEquals(this, other)) return false;
            return Id == other.Id;
        }

        public override bool Equals(object obj)
        {
            if (obj is null) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((Lobby)obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                var hashCode = Id;
                hashCode = (hashCode * 397) ^ Id.GetHashCode();
                hashCode = (hashCode * 397) ^ Id.GetHashCode();
                return hashCode;
            }
        }
    }
}
