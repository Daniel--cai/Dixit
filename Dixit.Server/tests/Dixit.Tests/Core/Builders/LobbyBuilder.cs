using System;
using System.Collections.Generic;
using System.Linq;
using Dixit.Domain.Aggregates;
using Dixit.Domain.Entities;

namespace Dixit.Tests.Core.Builders
{
    public class LobbyBuilder
    {
        private const string _story = "story";
        
        private Lobby _lobby;
        private List<string> _playerNames;

        public LobbyBuilder()
        {
            _lobby = new Lobby();
            _lobby.Code = "testcode";
        }

        public Lobby Build()
        {
            return _lobby;
        }

        public LobbyBuilder WithPlayers(List<string> playerNames)
        {
            _playerNames = playerNames;
            foreach (var player in playerNames)
            {
                _lobby.Players.Add(new Player(player, player));
            }

            return this;
        }

        public LobbyBuilder WithRoundOne()
        {
            if (_playerNames == null || _playerNames.Count == 0)
            {
                throw new ArgumentNullException(nameof(_playerNames));
            }

            _lobby.NewRound();
            _lobby.DealDeck();

            _lobby.PlayerTellStory(_lobby.CurrentStoryTeller, _story, _lobby.Deck.Hand(_lobby.CurrentStoryTeller).First());
            foreach (var playerName in _playerNames)
            {
                if (_lobby.CurrentStoryTeller.Name == playerName) continue;
                var player = _lobby.GetPlayerByName(playerName);
                _lobby.PlayerPlayCard(player, _lobby.Deck.Hand(player).First());
            }

            foreach (var playerName in _playerNames)
            {
                if (_lobby.CurrentStoryTeller.Name == playerName) continue;
                var player = _lobby.GetPlayerByName(playerName);
                var playerVotedCard = _lobby.CurrentPlayedCards.First(card => card.Owner != player);
                _lobby.PlayerVoteCard(player, playerVotedCard);
            }

            return this;
        }

        public LobbyBuilder WithRoundTwo()
        {
            _lobby.NewRound();
            _lobby.PlayerTellStory(_lobby.CurrentStoryTeller, _story, _lobby.Deck.Hand(_lobby.CurrentStoryTeller).First());
            return this;
        }
    }
}
