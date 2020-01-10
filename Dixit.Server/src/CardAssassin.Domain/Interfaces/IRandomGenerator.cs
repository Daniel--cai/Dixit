using System;
using System.Collections.Generic;

namespace CardAssassin.Domain.Interfaces
{
    public interface IRandomGenerator
    {
        List<T> RandomiseList<T>(List<T> list);
    }
}
