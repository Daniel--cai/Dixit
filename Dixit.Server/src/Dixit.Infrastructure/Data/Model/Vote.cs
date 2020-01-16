using Google.Cloud.Firestore;

namespace Dixit.Infrastructure.Data.Model
{
    [FirestoreData]
    public class Vote
    {
        [FirestoreProperty]
        public string Player { get; set; }
        [FirestoreProperty]
        public int Card { get; set; }
    }
}
