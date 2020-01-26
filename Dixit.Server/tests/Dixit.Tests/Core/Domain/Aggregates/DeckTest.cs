using Dixit.Domain.Entities;
using Dixit.Domain.ValueObjects;
using FluentAssertions;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace Dixit.Tests.Core.Domain.Aggregates
{
    public class DeckTest
    {
        [Fact]
        public void PlayedCardShouldBeDiscarded()
        {
            var player1 = new Player("player1", "");
            var card1 = new Card(1);
            card1.DrawnBy(player1);
            var deck = new Deck(new List<Card> { card1 });
            card1.Played(1);
            deck.FindCard(1).IsInPlayerHand().Should().BeFalse();
            deck.FindCard(1).IsInDeck().Should().BeFalse();
            deck.FindCard(1).IsPlayed().Should().BeTrue();
        }

        [Fact]
        public void PlayedCardShouldStillBeOwnedByPlayer()
        {
            var player1 = new Player("player1", "");
            var card1 = new Card(1);
            card1.DrawnBy(player1);
            var deck = new Deck(new List<Card> { card1 });
            card1.Played(1);
            deck.OwnedCards(player1).Should().Contain(card1);
        }

    }
}
