using Dixit.Application.Commands.Player;
using Dixit.Application.Events;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dixit.Application.Handlers
{
    public class TellStoryHandler : IRequestHandler<TellStoryCommand>
    {
        private readonly IMediator _mediator;

        public TellStoryHandler(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<Unit> Handle(TellStoryCommand request, CancellationToken cancellationToken)
        {
            await _mediator.Publish(new StoryToldEvent
            {
                Story = request.Story,
                StoryTeller = request.StoryTeller.Name,
                Code = request.Code
            });
            return Unit.Value;
        }
    }
}
