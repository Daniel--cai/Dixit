using System;
using System.Collections.Generic;
using System.Text;
using Google.Cloud.Firestore;

namespace Dixit.Infrastructure.Data.Model
{
    [FirestoreData]
    public class Player
    {
        [FirestoreProperty]
        public string PlayerName { get; set; }
        [FirestoreProperty]
        public string ConnectionId { get; set; }
        [FirestoreProperty]
        public List<int> Hand { get; set; }
        [FirestoreProperty]
        public int Score { get; set; }
    }
}
