import {
  Message,
  LobbyJoined,
  GameStarted,
  Connect,
  Connected,
  CodeUpdated,
  StoryRevealed,
  CardPlayed,
  StoryTold,
  CardVoted,
  RoundFinished,
  CardDrawn,
  LobbyLeft
} from "../client/events";
import { Actions, AnyAction } from "../store/action";
import { Dispatch } from "redux";
import { State } from ".";
import { push, CallHistoryMethodAction } from "connected-react-router";
import { Apiclient } from "../api/api";

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

export const lobbyLeftAction: ActionCreator<LobbyLeft> = message => ({
  type: "lobbyLeft",
  payload: message
});

export const storyToldAction: ActionCreator<StoryTold> = message => ({
  type: "storyTold",
  payload: message
});

export const cardPlayedAction: ActionCreator<CardPlayed> = message => ({
  type: "cardPlayed",
  payload: message
});

export const cardDrawnAction: ActionCreator<CardDrawn> = message => ({
  type: "cardDrawn",
  payload: message
});

export const storyRevealedAction: ActionCreator<StoryRevealed> = message => ({
  type: "storyRevealed",
  payload: message
});

export const cardVotedAction: ActionCreator<CardVoted> = message => ({
  type: "cardVoted",
  payload: message
});

export const roundFinishedAction: ActionCreator<RoundFinished> = message => ({
  type: "roundFinished",
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

export const fetchGameAction = (code: string) => {
  return async (dispatch: Dispatch) => {
    var response = await Apiclient.get(`/lobby?code=${code}`);
    console.log(response.data);
    dispatch({
      type: "fetchGame",
      payload: response.data
    });
  };
};

export const gameStartedAction = (message: GameStarted) => {
  return (dispatch: Dispatch, getState: () => State) => {
    dispatch(push(`/game/${getState().code}`));
    return dispatch({ type: "gameStarted", payload: message });
  };
};
