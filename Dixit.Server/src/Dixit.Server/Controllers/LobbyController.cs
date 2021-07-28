using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dixit.Application.Lobbies.Commands;
using Dixit.Application.Lobbies.Queries;
using Dixit.Domain.Aggregates;
using Dixit.Server.DTO;
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
        public async Task<ActionResult<LobbyDTO>> GetByCode([FromQuery] GetLobbyByCodeQuery query)
        {
            var lobby = await _mediator.Send(query);
            var reconnect = lobby.Players.Find(player => player.Name == query.Player);
            var response = new LobbyDTO
            {
                Players = lobby.ActivePlayers?.Select(player => new PlayerDTO { Name = player.Name, Score = player.Score }).ToList(),
                RoundNumber = lobby.RoundNumber,
                GameState = lobby.GameState.DisplayName,
                CurrentStoryTeller = lobby.CurrentStoryTeller?.Name,
                StoryCard = lobby.CurrentStoryCard?.Id ?? 0,
                Story = lobby.CurrentStory,
                Cards = lobby.CurrentPlayedCards?.Select(card => card.Id).ToList(),
                Votes = lobby.CurrentVotes?.Select(vote => new VoteDTO { Card = vote.Card.Id, Player = vote.Player.Name }).ToList(),
                Hand = lobby.Deck.Hand(reconnect)?.Select(card => card.Id).ToList()
            };
            return response;
        }

        [HttpPost("createLobby")]
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
