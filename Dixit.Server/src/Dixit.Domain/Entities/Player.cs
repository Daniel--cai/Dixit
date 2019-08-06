using Dixit.Domain.Interfaces;

namespace Dixit.Domain.Entities
{
    public class Player : IEntity
    {
        public string Name { get; set; }
        public string Identifier { get; set; }
        public int Score { get; set; }

        public int Id { get; set; }
}
}
