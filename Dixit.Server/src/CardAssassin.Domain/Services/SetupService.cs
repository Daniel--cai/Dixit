using System;
using System.Collections.Generic;
using System.Linq;
using CardAssassin.Domain.Interfaces;
using CardAssassin.Domain.ValueObjects;

namespace CardAssassin.Domain.Services
{
    public class SetupService : ISetupService
    {
        private readonly IRandomGenerator _randomGenerator;

        public SetupService(IRandomGenerator randomGenerator)
        {
            _randomGenerator = randomGenerator;
        }

        public List<AssignedTarget> ResolveTargets(List<string> players)
        {
            var randomised = _randomGenerator.RandomiseList(players);
            var circularLinkedList = new List<AssignedTarget>();

            for(var i = 0; i < players.Count - 1 ; i++)
            {
                var next = i + 1;

                if (i == randomised.Count - 1)
                {
                    next = 0;
                }

                circularLinkedList.Add(new AssignedTarget
                {
                    Player = randomised[i],
                    Target = randomised[next]
                });
            }
        
            return circularLinkedList;
        }

        public List<AssignedWords> ResolveWords(List<string> players)
        {
            return players.Select(player => new AssignedWords
            {
                Player = player,
                Words = new List<string> { "one", "two", "three" }
            }).ToList();
        }
    }
}
