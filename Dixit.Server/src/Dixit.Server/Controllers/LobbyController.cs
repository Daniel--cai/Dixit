using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dixit.Application.Commands;
using Dixit.Application.Queries;
using Dixit.Domain.Aggregates;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Dixit.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LobbyController : ControllerBase
    {

        private readonly IMediator _mediator;

        public LobbyController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<Lobby>> GetByCode([FromQuery] GetLobbyByCodeQuery query)
        {

            var lobby = await _mediator.Send(query);
            return lobby;
        }

        [HttpPost]
        public async Task<ActionResult<string>> CreateLobby(CreateLobbyCommand command)
        {
            var lobby = await _mediator.Send(command);
            return lobby.Code;
        }

        [HttpPost("startGame")]
        public async Task<ActionResult> StartGame(StartLobbyCommand command)
        {
            var lobby = await _mediator.Send(command);
            return Ok();
        }
    }
}
