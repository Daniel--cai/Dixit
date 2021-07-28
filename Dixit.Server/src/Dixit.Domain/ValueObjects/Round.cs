using Dixit.Domain.Entities;
using Dixit.Domain.Exceptions;
using System;
using System.Collections.Generic;

namespace Dixit.Domain.ValueObjects
{
    public class Round
    {
        public int Counter { get; set;}
        public Player StoryTeller { get; set; }
        public string Story { get; set; }
        public Card StoryTellerCard { get; set; }
        public List<Vote> Votes { get; set; }


        public Round(int roundNumber, Player storyTeller)
        {
            Counter = roundNumber;
            Votes = new List<Vote>();
            StoryTeller = storyTeller;
        }

        public void PlayerVoteCard(Player player, Card card)
        {
            if (card.Owner == player)
                throw new InvalidPlayerActionException($"Player {player.Name} cannot vote for their own card.");
      
            if (player == StoryTeller)
                throw new InvalidPlayerActionException($"Storyteller {player.Name} cannot vote in this round.");



            Votes.RemoveAll(existingVote => existingVote.Player == player);

            var vote = new Vote(player, card);
            Votes.Add(vote);
        }

        public void PlayerPlayCard(Player player, Card card)
        {
            if (player == StoryTeller)
                throw new InvalidPlayerActionException($"Storyteller {player.Name} cannot submit in this round.");

            if (card.Owner != player)
                throw new InvalidPlayerActionException($"Player {player.Name} does not hold card {card.Id}");

            card.Played(Counter);
        }

        public void PlayerTellStory(Player player, string story, Card card)
        {
            if (player != StoryTeller)
                throw new InvalidPlayerActionException($"Player {player.Name} is not the storyteller in this round.");

            if (card.Owner != player)
                throw new InvalidPlayerActionException($"Player {player.Name} does not hold card {card.Id}.");
            Story = story;
            StoryTellerCard = card;
            
        }
    }
}
