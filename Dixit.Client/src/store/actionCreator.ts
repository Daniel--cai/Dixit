import { Message, LobbyJoined, GameStarted, Connect } from "../client/events";
import { Actions } from "../store/action";

export type ActionCreator<T extends Message> = (
  message: T
) => { type: Actions; payload: T };

export const actionCreators = {};

export const connectAction: ActionCreator<Connect> = message => ({
  type: "connect",
  payload: message
});

export const lobbyJoinedAction: ActionCreator<LobbyJoined> = message => ({
  type: "lobbyJoined",
  payload: message
});

export const gameStartedAction: ActionCreator<GameStarted> = message => ({
  type: "gameStarted",
  payload: message
});
