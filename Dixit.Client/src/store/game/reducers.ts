import { GameStateState, GameStateActionTypes } from "./types";

import {
  GAME_STARTED,
  STORY_TOLD,
  STORY_REVEALED,
  ROUND_FINISHED,
  GAME_FETCHED
} from "../events/types";

import { GameState } from "./models";
import { Scoreboard } from "../events/models";

const initialState: GameStateState = {
  players: [],
  roundNumber: 0,
  gameState: GameState.Lobby,
  score: []
};

export function gameStateReducer(
  state: GameStateState = initialState,
  action: GameStateActionTypes
): GameStateState {
  switch (action.type) {
    case GAME_STARTED: {
      return {
        ...state,
        gameState: GameState.Story,
        score: action.payload.players.map(player => ({
          name: player,
          score: 0
        }))
      };
    }
    case STORY_TOLD: {
      return { ...state, gameState: GameState.InProgress };
    }
    case STORY_REVEALED: {
      return { ...state, gameState: GameState.Voting };
    }
    case ROUND_FINISHED: {
      const score: Scoreboard[] = state.players.map(player => {
        let scored = 0;
        const update = action.payload.playerUpdates.find(
          prev => prev.name === player.name
        );
        if (update) scored = update.score;
        return {
          name: player.name,
          score: player.score + scored,
          scored
        };
      });

      return { ...state, gameState: GameState.Story, score };
    }
    case GAME_FETCHED: {
      return {
        ...state,
        gameState: action.payload.gameState,
        score: action.payload.players
      };
    }

    default:
      return state;
  }
}
