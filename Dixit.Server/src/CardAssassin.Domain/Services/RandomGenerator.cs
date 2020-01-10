using System;
using System.Collections.Generic;
using CardAssassin.Domain.Interfaces;

namespace CardAssassin.Domain.Services
{
    public class RandomGenerator : IRandomGenerator
    {
        public List<T> RandomiseList<T>(List<T> list)
        {
            var rng = new Random();
            var randomised = new List<T>(list);
            int n = list.Count;
            while (n > 1)
            {
                n--;
                int k = rng.Next(n + 1);
                T value = randomised[k];
                randomised[k] = randomised[n];
                randomised[n] = value;
            }

            return randomised;
        }
    }
}
