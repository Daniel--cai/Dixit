import { Action } from "redux";

export type Actions =
  | "connect"
  | "connected"
  | "codeUpdated"
  | "lobbyJoined"
  | "gameStarted";

export interface AnyAction<T> extends Action<T> {
  [extraProps: string]: any;
}
