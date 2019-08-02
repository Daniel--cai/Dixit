using Dixit.Application.Commands;
using Dixit.Application.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.Handlers
{
    public class JoinLobbyHandler : IRequestHandler<JoinLobbyCommand, JoinLobbyResponse>
    {
        public Task<JoinLobbyResponse> Handle(JoinLobbyCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
