using System;
using System.Linq;
using AutoMapper;
using Dixit.Infrastructure;
using Newtonsoft.Json;

namespace Dixit.Infrastructure.Profiles
{
    public class LobbyProfile : Profile
    {
        public LobbyProfile()
        {
            //source -> dest
            CreateMap<Domain.Aggregates.Lobby, Data.Model.Lobby>()
                //.ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Code, opt => opt.MapFrom(src => src.Code))
                .ForMember(dest => dest.RoundNumber, opt => opt.MapFrom(src => src.RoundNumber))
                .ForMember(dest => dest.Rounds, opt => opt.MapFrom(src => JsonConvert.SerializeObject(src.Rounds.Select(round =>
                    new Data.Model.Round
                    {
                        Counter = round.Counter,
                        StoryTeller = round.StoryTeller.Name,
                        Story = round.Story,
                        Cards = src.GetCardsInRound(round.Counter).Select(card => card.Id).ToList(),
                        StoryTellerCard = round.StoryTellerCard != null ? round.StoryTellerCard.Id : 0,
                        Votes = round.Votes.Select(vote => new Data.Model.Vote
                        {
                            Player = vote.Player.Name,
                            Card = vote.Card.Id
                        }).ToList()
                    }))))
                .ForMember(dest => dest.Deck, opt => opt.MapFrom(src => src.Deck.Cards.Select(card => card.Id)))
                .ForMember(dest => dest.Discard, opt => opt.MapFrom(src => src.Deck.Cards.Where(card =>
                    card.Discarded).Select(card => card.Id)))

                .ForMember(dest => dest.Players, opt => opt.MapFrom(src => JsonConvert.SerializeObject(src.Players.Select(player =>
                    new Data.Model.Player
                    {
                        PlayerName = player.Name,
                        ConnectionId = player.Identifier,
                        Score = player.Score,
                        Hand = src.Deck.Hand(src.GetPlayerByName(player.Name)).Select(card => card.Id).ToList()
                    }
                ))));           
        }
    }
}
