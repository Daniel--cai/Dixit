using MediatR;

namespace CardAssassin.Application.Commands
{
    public class JoinLobbyCommand : IRequest
    {
        public string Name { get; set; }
        public string Code { get; set; }
    }
}
