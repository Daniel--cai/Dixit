using Dixit.Core.SharedKernel;

namespace Dixit.Core.Entities
{
    public class Player : BaseEntity
    {
        public string Name { get; set; }
        public string Identifier { get; set; }
        public int Score { get; set; }
    }
}
