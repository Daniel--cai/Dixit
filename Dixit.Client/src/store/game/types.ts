import { GameState, Game, Player } from "./models";
import {
  GameStartedEvent,
  StoryToldEvent,
  StoryRevealedEvent,
  RoundFinishedEvent,
  GameFetchedEvent,
  LobbyJoinedEvent,
  LobbyLeftEvent
} from "../events/types";
import { Scoreboard } from "../events/models";

export const FETCH_GAME = "fetchGame";
export const START_GAME = "startGame";

export type GameStateState = {
  players: Player[];
  roundNumber: number;
  gameState: GameState;
  score: Scoreboard[];
  loaded: boolean;
};

export interface FetchGameAction {
  type: typeof FETCH_GAME;
  code: string;
}

export interface StartGameAction {
  type: typeof START_GAME;
  code: string;
}

export type GameStateActionTypes =
  | FetchGameAction
  | StartGameAction
  | GameFetchedEvent
  | GameStartedEvent
  | StoryToldEvent
  | StoryRevealedEvent
  | RoundFinishedEvent
  | LobbyLeftEvent
  | LobbyJoinedEvent;
