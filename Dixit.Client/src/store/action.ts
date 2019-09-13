import { Action } from "redux";

export type Event = "lobbyJoined" | "gameStarted";
export type Actions = "connect" | Event;

export interface AnyAction<T> extends Action<T> {
  [extraProps: string]: any;
}
