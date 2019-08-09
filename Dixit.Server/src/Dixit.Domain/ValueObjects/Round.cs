using Dixit.Domain.Entities;
using System;
using System.Collections.Generic;

namespace Dixit.Domain.ValueObjects
{
    public class Round
    {
        public int Counter { get; set;}
        public Player StoryTeller { get; set; }
        public string Story { get; set; }
        public IEnumerable<Card> Cards { get; set; }
        public Card StoryTellerCard { get; set; }
        public IEnumerable<Vote> Votes { get; set; }

        public void SetStoryTeller(Player storyTeller)
        {
            StoryTeller = storyTeller;
        }

        public void PlayerVoteCard(Player player, Card card)
        {
            var vote = new Vote
            {
                Player = player,
                Card = card
            };
        }

        public void PlayerTellStory(Player player, string story)
        {
            if (player != StoryTeller)
                throw new InvalidOperationException($"Player {player.Name} is not the storyteller but is trying to tell one.");
            Story = story;
        }
    }
}
