using Dixit.Domain.Interfaces;
using System;
using System.Collections.Generic;

namespace Dixit.Domain.Entities
{
    public class Player : IEntity, IEquatable<Player>
    {
        public string Name { get; set; }
        public string Identifier { get; set; }
        public int Score { get; set; }

        public int Id { get; set; }

        public Player(string name, string identifier)
        {
            Name = name;
            Identifier = identifier;
            Score = 0;
        }

        public int ScorePoint(int bonus = 1)
        {
            Score = Score + bonus;
            return Score;
        }

        public override bool Equals(object obj)
        {
            return Equals(obj as Player);
        }

        public bool Equals(Player other)
        {
            return Name == other.Name;
        }

        public override int GetHashCode()
        {
            return Name.GetHashCode();
        }

        public static bool operator ==(Player lhs, Player rhs)
        {
            if (lhs is null && rhs is null) return true;
            if (lhs is null || rhs is null) return false;

            return lhs.Equals(rhs);
        }

        public static bool operator !=(Player lhs, Player rhs)
        {
            return !(lhs == rhs);
        }

    }
}
