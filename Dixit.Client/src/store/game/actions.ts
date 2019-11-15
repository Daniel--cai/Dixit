import { GameStateActionTypes, START_GAME, FETCH_GAME } from "./types";
import { STORY_TOLD, STORY_REVEALED, ROUND_FINISHED } from "../events/types";

export function startGame(code: string): GameStateActionTypes {
  return {
    type: START_GAME,
    code: code
  };
}

export function fetchGame(code: string): GameStateActionTypes {
  return {
    type: FETCH_GAME,
    code
  };
}
