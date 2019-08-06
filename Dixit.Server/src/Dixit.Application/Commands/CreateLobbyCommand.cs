using Dixit.Application.Responses;
using MediatR;

namespace Dixit.Application.Commands
{
    public class CreateLobbyCommand : IRequest<CreateLobbyResponse>
    {
        public string Name { get; set; }
    }
}
