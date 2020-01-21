using System;
namespace Dixit.Infrastructure.Mapper
{
    public interface IMapper<T, U>
    {
        U Map(T t);
        T Map(U u);
    }
}
