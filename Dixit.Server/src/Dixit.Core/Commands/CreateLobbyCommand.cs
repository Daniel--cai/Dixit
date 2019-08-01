using Dixit.Core.Requests;
using Dixit.Core.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Core.Commands
{
    public class CreateLobbyCommand : IRequestHandler<CreateLobbyRequest, string>
    {
        public Task<string> Handle(CreateLobbyRequest request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
