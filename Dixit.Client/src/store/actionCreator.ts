import {
  Message,
  LobbyJoined,
  GameStarted,
  Connect,
  Connected,
  CodeUpdated
} from "../client/events";
import { Actions } from "../store/action";

export type ActionCreator<T extends Message> = (
  message: T
) => { type: Actions; payload?: T };

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

export const connectedAction: ActionCreator<Connected> = message => ({
  type: "connected",
  payload: message
});

export const codeUpdatedAction: ActionCreator<CodeUpdated> = message => ({
  type: "codeUpdated",
  payload: message
});
