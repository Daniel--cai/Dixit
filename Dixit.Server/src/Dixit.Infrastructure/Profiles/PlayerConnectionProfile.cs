using System;
using System.Linq;
using AutoMapper;
using Dixit.Infrastructure;

namespace Dixit.Infrastructure.Profiles
{
    public class PlayerConnectionProfile : Profile
    {
        public PlayerConnectionProfile()
        {
            CreateMap<Domain.Aggregates.PlayerConnection, Data.Model.PlayerConnection>().ReverseMap();
        }
    }
}
