import { Action } from "redux";

export type Actions =
  | "connect"
  | "connected"
  | "fetchGame"
  | "fetchPlayers"
  | "codeUpdated"
  | "lobbyJoined"
  | "gameStarted"
  | "storyTold"
  | "cardSubmitted"
  | "cardVoted"
  | "roundFinished";

export interface AnyAction<T> extends Action<T> {
  [extraProps: string]: any;
}
