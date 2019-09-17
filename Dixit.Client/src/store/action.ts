import { Action } from "redux";

export type Actions =
  | "connect"
  | "connected"
  | "fetchGame"
  | "fetchPlayers"
  | "codeUpdated"
  | "cardDrawn"
  | "cardVoted"
  | "lobbyJoined"
  | "lobbyLeft"
  | "gameStarted"
  | "storyTold"
  | "storyRevealed"
  | "cardPlayed"
  | "roundFinished";

export interface AnyAction<T> extends Action<T> {
  [extraProps: string]: any;
}
