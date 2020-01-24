using System;
using Google.Cloud.Firestore;

namespace Dixit.Infrastructure.Data.Model
{
    [FirestoreData]
    public class PlayerConnection : IDocumentModel
    {
        [FirestoreProperty]
        public string Id { get; set; }
        [FirestoreProperty]
        public string Name { get; set; }
        [FirestoreProperty]
        public string Identifier { get; set; }
        [FirestoreProperty]
        public string Code { get; set; }
    }
}
