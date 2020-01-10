using System;
using System.Collections.Generic;
using System.Linq;
using CardAssassin.Domain.Entities;
using CardAssassin.Domain.Interfaces;
using CardAssassin.Domain.ValueObjects;

namespace CardAssassin.Domain.Aggregates
{
    public class Lobby : IEntity, IAggregateRoot
    {
        public string Code { get; set; }
        public List<Player> Players { get; set; }
        public State GameState { get; set; }
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }

        public Lobby()
        {
            Code = Guid.NewGuid().ToString().Substring(0, 4);
            Players = new List<Player>();
            GameState = State.Lobby;
        }

        public void AssignTargets(List<AssignedTarget> assignments)
        {
            foreach (var assignment in assignments)
            {
                var player = GetPlayerByName(assignment.Player);
                player.Target = assignment.Target;
            }
        }

        public void AssignWords(List<AssignedWords> assignments)
        {
            foreach (var assignment in assignments)
            {
                var player = GetPlayerByName(assignment.Player);
                player.Words = assignment.Words;
            }
        }

        public void EliminateTarget(Player player)
        {
            var target = GetPlayerByName(player.Target);
            target.Eliminate();

            AssignTargets(new List<AssignedTarget> {
                new AssignedTarget
                {
                    Player = player.Name,
                    Target = target.Target
                }
            });

            AssignWords(new List<AssignedWords> {
                new AssignedWords
                {
                    Player = player.Name,
                    Words = player.Words.Concat(target.Words).ToList()
                }
            });
        }

        public List<Player> ActivePlayers => Players.Where(player => player.Connected && !player.Eliminated).ToList();

        public Player GetPlayerByName(string name)
        {
            return Players.Find(player => player.Name == name);
        }


        public Player PlayerConnected(string name, string identifier)
        {
            var existingPlayer = Players.Find(player => player.Name == name);
            if (existingPlayer != null)
            {
                existingPlayer.Identifier = identifier;
                existingPlayer.Connected = true;
            }
            else
            {
                existingPlayer = new Player(name, identifier);
                Players.Add(existingPlayer);
            }
            return existingPlayer;
        }

        public Player PlayerDisconnected(string disconnected)
        {
            var player = Players.Find(p => p.Name == disconnected);
            player.Connected = false;
            return player;
        }

    }

}