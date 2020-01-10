using System;
using System.Collections.Generic;
using CardAssassin.Domain.Interfaces;

namespace CardAssassin.Domain.Entities
{
    public class Player : IEntity, IEquatable<Player>
    {
        public string Name { get; set; }
        public string Identifier { get; set; }
        public bool Eliminated { get; set; }
        public bool Connected { get; set; }
        public int Id { get; set; }
        public string Target { get; set; }
        public List<string> Words { get; set; }

        public void Eliminate()
        {
            Eliminated = true;
        }

        public Player(string name, string identifier)
        {
            Name = name;
            Identifier = identifier;
            Connected = true;
            Eliminated = false;
        }

        public override bool Equals(object obj)
        {
            return Equals(obj as Player);
        }

        public bool Equals(Player other)
        {
            return Name == other?.Name;
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
