using System.Collections.Generic;
using Google.Cloud.Firestore;

namespace Dixit.Infrastructure.Data.Model
{
    [FirestoreData]
    public class Round
    {
        [FirestoreProperty]
        public int Counter { get; set; }
        [FirestoreProperty]
        public string StoryTeller { get; set; }
        [FirestoreProperty]
        public string Story { get; set; }
        [FirestoreProperty]
        public List<int> Cards { get; set; } = new List<int>();
        [FirestoreProperty]
        public int StoryTellerCard { get; set; }
        [FirestoreProperty]
        public List<Vote> Votes { get; set; } = new List<Vote>();
    }
}
