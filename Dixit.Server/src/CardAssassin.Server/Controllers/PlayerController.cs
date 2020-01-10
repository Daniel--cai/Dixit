using CardAssassin.Application.Commands;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardAssassin.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PlayerController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("TellStory")]
        public async Task<ActionResult> TellStory(TellStoryCommand command)
        {
            await _mediator.Send(command);
            return Ok();
        }

        [HttpPost("PlayCard")]
        public async Task<ActionResult> PlayCard(PlayCardCommand command)
        {
            await _mediator.Send(command);
            return Ok();
        }

        [HttpPost("VoteCard")]
        public async Task<ActionResult> VoteCard(VoteCardCommand command)
        {
            await _mediator.Send(command);
            return Ok();
        }

    }
}
