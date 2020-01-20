using System;
using System.Threading.Tasks;
using Dixit.Application.Services;
using Dixit.Infrastructure.Configuration;
using Dixit.Infrastructure.Data;
using Google.Cloud.Firestore;
using Microsoft.Extensions.Options;

namespace Dixit.Infrastructure.Services
{
    public class FirestoreClient<T> : INoSqlClient<T> where T : IDocumentModel
    {
        private readonly FirestoreConfig _config;

        public FirestoreClient(IOptions<FirestoreConfig> options)
        {
            _config = options.Value;
        }

        public async Task<string> CreateDocument(T document)
        {
            FirestoreDb db = FirestoreDb.Create(_config.ProjectId);
            var documentReference = db.Collection(_config.LobbyCollection);
            var newDocument = await documentReference.AddAsync(document);
            return newDocument.Id;
        }

        public async Task<T> GetDocumentById(string documentId)
        {
            FirestoreDb db = FirestoreDb.Create(_config.ProjectId);
            var collection = db.Collection(_config.LobbyCollection).Document(documentId);

            var snapshot = await collection.GetSnapshotAsync();
            return snapshot.Exists ? snapshot.ConvertTo<T>() : default;
        }

        public Task UpdateDocument(T document)
        {
            throw new NotImplementedException();
        }
    }
}
