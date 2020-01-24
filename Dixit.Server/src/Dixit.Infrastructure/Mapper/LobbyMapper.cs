using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Dixit.Domain.Aggregates;
using Dixit.Domain.Entities;
using Dixit.Domain.ValueObjects;
using Dixit.Infrastructure.Data.Model;

namespace Dixit.Infrastructure.Mapper
{
    public interface ILobbyMapper : IMapper<Domain.Aggregates.Lobby, Data.Model.Lobby> { }

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
            var domain = new Domain.Aggregates.Lobby
            {

                GameState = Enumeration.FromDisplayName<State>(data.GameState),
                RoundNumber = data.RoundNumber,
                DateCreated = data.DateCreated,
                Code = data.Code,
            };

            domain.Players = data.Players.Select(player =>
                  new Domain.Entities.Player
                  {
                      Name = player.PlayerName,
                      Identifier = player.ConnectionId,
                      Score = player.Score,
                      Id = 0,
                      Connected = true
                  }).ToList();

            domain.Deck = new Deck(data.Deck.Select(id =>
            {
                var card = new Card(id)
                {
                    Discarded = data.Discard.Contains(id),
                    Owner = data.Players.FirstOrDefault(player => player.Hand.Contains(id))?.PlayerName ?? null,
                    RoundSubmitted = data.Rounds.FirstOrDefault(round => round.Cards.Contains(id) || id == round.StoryTellerCard)?.Counter ?? -1
                };
                return card;
            }).ToList());

            domain.Rounds = data.Rounds.Select(round =>
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
