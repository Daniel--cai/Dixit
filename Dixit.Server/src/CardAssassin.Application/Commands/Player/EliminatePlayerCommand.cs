using CardAssassin.Application.Responses;
using MediatR;

namespace CardAssassin.Application.Commands
{
    public class EliminatePlayerCommand: IRequest<EliminatePlayerResponse>
    {
        public string Player { get; set; }
        public int Card { get; set; }
        public string Code { get; set; }
    }
}
