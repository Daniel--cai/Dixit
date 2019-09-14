import {
  Message,
  LobbyJoined,
  GameStarted,
  Connect,
  Connected,
  CodeUpdated,
  GameFetched,
  StoryRevealed,
  CardSubmitted,
  StoryTold,
  CardVoted,
  RoundFinished
} from "../client/events";
import { Actions, AnyAction } from "../store/action";
import Axios from "axios";
import { Dispatch } from "redux";
import { State } from ".";
import { push, CallHistoryMethodAction } from "connected-react-router";

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

export const storyToldAction: ActionCreator<StoryTold> = message => ({
  type: "storyTold",
  payload: message
});

export const cardSubmittedAction: ActionCreator<CardSubmitted> = message => ({
  type: "cardSubmitted",
  payload: message
});

export const storyRevealedAction: ActionCreator<StoryRevealed> = message => ({
  type: "cardSubmitted",
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
    var response = await Axios.get(`/api/lobby?code=${code}`);
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
