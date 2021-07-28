using Dixit.Application.Players.Commands;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dixit.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : BaseController
    {
        [HttpPost("TellStory")]
        public async Task<ActionResult> TellStory(TellStoryCommand command)
        {
            await Mediator.Send(command);
            return Ok();
        }

        [HttpPost("PlayCard")]
        public async Task<ActionResult> PlayCard(PlayCardCommand command)
        {
            await Mediator.Send(command);
            return Ok();
        }

        [HttpPost("VoteCard")]
        public async Task<ActionResult> VoteCard(VoteCardCommand command)
        {
            await Mediator.Send(command);
            return Ok();
        }
    }
}
