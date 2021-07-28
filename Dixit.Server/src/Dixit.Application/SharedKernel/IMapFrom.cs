using System;
using AutoMapper;

namespace Dixit.Application.SharedKernel
{
    public interface IMapFrom<T>
    {
        void Mapping(Profile profile) => profile.CreateMap(typeof(T), GetType());
    }
}
