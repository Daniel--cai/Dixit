using System.Threading.Tasks;

namespace Dixit.Application.Services
{
    public interface INoSqlClient<T>
    {
        Task<T> GetDocumentById(string id);
        Task<T> UpdateDocument(T document);
        Task<string> CreateDocument(T document);
    }
}