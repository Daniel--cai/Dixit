using System;
using System.Collections.Generic;
using System.Linq;
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
            var documentReference = db.Collection(typeof(T).Name);
            var newDocument = await documentReference.AddAsync(document);
            return newDocument.Id;
        }

        public async Task DeleteDocument(T document)
        {
            FirestoreDb db = FirestoreDb.Create(_config.ProjectId);
            var collection = db.Collection(typeof(T).Name).Document(document.Id);


            await collection.DeleteAsync();
        }

        public async Task<IEnumerable<T>> GetDocumentsByField(string field, string value, int limit = 1)
        {
            FirestoreDb db = FirestoreDb.Create(_config.ProjectId);
            var collection = db.Collection(typeof(T).Name)
                                .WhereEqualTo(field, value)
                                .Limit(limit);

            var documentSnapshots = await collection.GetSnapshotAsync();
            return documentSnapshots.Documents.Select(snapshot =>
            {
                var document = snapshot.ConvertTo<T>();
                document.Id = snapshot.Id;
                return document;
            });
          
        }

        public async Task<T> GetDocumentById(string documentId)
        {
            FirestoreDb db = FirestoreDb.Create(_config.ProjectId);
            var collection = db.Collection(typeof(T).Name).Document(documentId);

            var snapshot = await collection.GetSnapshotAsync();
            if (snapshot.Exists)
            {
                var document = snapshot.ConvertTo<T>();
                document.Id = documentId;
                return document;
            }
            return default;
        }

        public async Task UpdateDocument(T document)
        {
            FirestoreDb db = FirestoreDb.Create(_config.ProjectId);
            var collection = db.Collection(typeof(T).Name).Document(document.Id);

            await collection.SetAsync(document);
        }

    }
}
