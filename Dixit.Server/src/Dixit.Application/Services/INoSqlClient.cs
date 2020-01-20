using System.Threading.Tasks;

namespace Dixit.Application.Services
{
    public interface INoSqlClient<T> : IReadOnlyNoSqlClient<T>, IWriteOnlyNoSqlClient<T>
    {
    }

    public interface IReadOnlyNoSqlClient<T>
    {
        Task<T> GetDocumentById(string id);
    }

    public interface IWriteOnlyNoSqlClient<in T>
    {
        Task<string> CreateDocument(T document);
        Task UpdateDocument(T document);
    }
}