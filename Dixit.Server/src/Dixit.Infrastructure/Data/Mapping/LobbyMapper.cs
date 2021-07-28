using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Dixit.Domain.Aggregates;
using Dixit.Domain.Entities;
using Dixit.Domain.ValueObjects;
using Dixit.Infrastructure.Data.Model;
using Newtonsoft.Json;

namespace Dixit.Infrastructure.Data.Mapping
{
    public interface ILobbyMapper : IDataMapper<Domain.Aggregates.Lobby, Data.Model.Lobby> { }

    public class LobbyMapper : ILobbyMapper
    {
        private readonly IMapper _mapper;

        public LobbyMapper(IMapper mapper)
        {
            _mapper = mapper;
        }

        public Data.Model.Lobby Map(Domain.Aggregates.Lobby domain)
        {
            var data = _mapper.Map<Data.Model.Lobby>(domain);
            return data;
        }

        public Domain.Aggregates.Lobby Map(Data.Model.Lobby data)
        {
            var rounds = data.Rounds != null ? JsonConvert.DeserializeObject<List<Data.Model.Round>>(data.Rounds) : new List<Data.Model.Round>();
            var players = data.Players != null ? JsonConvert.DeserializeObject<List<Data.Model.Player>>(data.Players) : new List<Data.Model.Player>();

            var domain = new Domain.Aggregates.Lobby
            {

                GameState = Enumeration.FromDisplayName<State>(data.GameState),
                RoundNumber = data.RoundNumber,
                DateCreated = data.DateCreated,
                Code = data.Code,
            };

            domain.Players = players.Select(player =>
                  new Domain.Entities.Player
                  {
                      Name = player.PlayerName,
                      Identifier = player.ConnectionId,
                      Score = player.Score,
                      Id = 0,
                      Connected = player.Connected
                  }).ToList();

            domain.Deck = new Deck(data.Deck.Select(id =>
            {
                var owner = players.FirstOrDefault(player => player.Hand.Contains(id));
                var card = new Card(id)
                {
                    Discarded = data.Discard.Contains(id),
                    Owner = owner != null ? domain.GetPlayerByName(owner.PlayerName) : null,
                    RoundSubmitted = rounds.FirstOrDefault(round => round.Cards.Contains(id) || id == round.StoryTellerCard)?.Counter ?? 0
                };
                return card;
            }).ToList());

            domain.Rounds = rounds.Select(round =>
            {
                var newRound = new Domain.ValueObjects.Round(round.Counter, domain.GetPlayerByName(round.StoryTeller))
                {
                    Counter = round.Counter,
                    Story = round.Story,
                    StoryTellerCard = domain.GetCard(round.StoryTellerCard),
                    Votes = round.Votes.Select(vote => new Domain.ValueObjects.Vote(
                        domain.GetPlayerByName(vote.Player),
                        domain.Deck.FindCard(vote.Card)
                    )).ToList()
                };

                return newRound;

            }).ToList();

            return domain;
        }
    }
}
