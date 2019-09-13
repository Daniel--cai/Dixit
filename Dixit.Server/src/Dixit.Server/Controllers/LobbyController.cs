using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dixit.Application.Commands;
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
        public async Task<ActionResult<IEnumerable<string>>> Get()
        {

            await _mediator.Send(new JoinLobbyCommand { Name = "123", Code = "1233" });
            return new string[] { "value1", "value2" };
        }

        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }    

        [HttpPost]
        public async Task<ActionResult<string>> CreateLobby(CreateLobbyCommand command)
        {
            var lobby = await _mediator.Send(command);
            return lobby.Code;
        }
    }
}
