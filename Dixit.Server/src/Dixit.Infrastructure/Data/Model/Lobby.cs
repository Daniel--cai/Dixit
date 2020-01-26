using System;
using System.Collections.Generic;
using Google.Cloud.Firestore;

namespace Dixit.Infrastructure.Data.Model
{
    [FirestoreData]
    public class Lobby : IDocumentModel
    {
        [FirestoreProperty]
        public string Id  { get; set; }
        [FirestoreProperty]
        public string Code { get; set; }
        [FirestoreProperty]
        public string Rounds { get; set; }
        [FirestoreProperty]
        public int RoundNumber { get; set; }
        [FirestoreProperty]
        public List<int> Deck { get; set; } 
        [FirestoreProperty]
        public List<int> Discard { get; set; } 
        [FirestoreProperty]
        public string Players { get; set; }
        [FirestoreProperty]
        public string GameState { get; set; }
        [FirestoreProperty]
        public DateTime DateCreated { get; set; }
    }
}
