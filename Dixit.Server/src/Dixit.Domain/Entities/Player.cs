using Dixit.Domain.SharedKernel;

namespace Dixit.Domain.Entities
{
    public class Player : BaseEntity
    {
        public string Name { get; set; }
        public string Identifier { get; set; }
        public int Score { get; set; }
    }
}
