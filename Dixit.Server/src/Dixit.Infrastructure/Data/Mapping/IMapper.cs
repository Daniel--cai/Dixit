using System;
namespace Dixit.Infrastructure.Data.Mapping
{
    public interface IDataMapper<T, U>
    {
        U Map(T t);
        T Map(U u);
    }
}
