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
        public List<Vote> Votes { get; set; }

        public void SetStoryTeller(Player storyTeller)
        {
            StoryTeller = storyTeller;
        }

        public void PlayerVoteCard(Player player, Card card)
        {
            if (card.Owner == player)
                throw new InvalidOperationException($"Player {player.Name} cannot vote for their own card");

            if (player == StoryTeller)
                throw new InvalidOperationException($"Storyteller {player.Name} cannot vote in this round.");

            var vote = new Vote(player, card);
            Votes.Add(vote);
        }

        public void PlayerTellStory(Player player, string story, Card card)
        {
            if (player != StoryTeller)
                throw new InvalidOperationException($"Player {player.Name} is not the storyteller in this round.");
            Story = story;
            StoryTellerCard = card;
        }
    }
}
