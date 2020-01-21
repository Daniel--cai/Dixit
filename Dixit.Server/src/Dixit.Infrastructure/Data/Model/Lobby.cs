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
        public List<Round> Rounds { get; set; } = new List<Round>();
        [FirestoreProperty]
        public int RoundNumber { get; set; }
        [FirestoreProperty]
        public List<int> Deck { get; set; } = new List<int>();
        [FirestoreProperty]
        public List<int> Discard { get; set; } = new List<int>();
        [FirestoreProperty]
        public List<Player> Players { get; set; }
        [FirestoreProperty]
        public string GameState { get; set; }
        [FirestoreProperty]
        public DateTime DateCreated { get; set; }
    }
}
