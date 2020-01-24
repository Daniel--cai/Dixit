using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dixit.Application.Services
{
    public interface INoSqlClient<T> : IReadOnlyNoSqlClient<T>, IWriteOnlyNoSqlClient<T>
    {
    }

    public interface IReadOnlyNoSqlClient<T>
    {
        Task<T> GetDocumentById(string id);
        Task<IEnumerable<T>> GetDocumentsByField(string field, string value, int limit = 1);
    }

    public interface IWriteOnlyNoSqlClient<in T>
    {
        Task<string> CreateDocument(T document);
        Task UpdateDocument(T document);
        Task DeleteDocument(T document);
    }
}