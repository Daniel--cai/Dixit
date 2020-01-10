using System;
using System.Collections.Generic;
using CardAssassin.Domain.ValueObjects;

namespace CardAssassin.Domain.Interfaces
{
    public interface ISetupService
    {
        List<AssignedTarget> ResolveTargets(List<string> players);
        List<AssignedWords> ResolveWords(List<string> players);
    }
}
