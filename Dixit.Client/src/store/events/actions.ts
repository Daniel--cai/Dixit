import {
  STORY_TOLD,
  STORY_REVEALED,
  ROUND_FINISHED,
  EventTypes,
  LOBBY_JOINED,
  LOBBY_LEFT,
  CARD_PLAYED,
  CARD_VOTED,
  CARD_DRAWN,
  CONNECTED,
  CODE_UPDATED,
  GAME_FETCHED
} from "../events/types";
import { FETCH_GAME } from "../game/types";
import { Dispatch } from "redux";
import { Apiclient } from "../../api";
import { State } from "..";
import { push } from "connected-react-router";

export function storyTold(payload: any): EventTypes {
  return {
    type: STORY_TOLD,
    payload
  };
}

export function storyRevealed(payload: any): EventTypes {
  return {
    type: STORY_REVEALED,
    payload
  };
}

export function roundFinished(payload: any): EventTypes {
  return {
    type: ROUND_FINISHED,
    payload
  };
}

export function lobbyJoined(payload: any): EventTypes {
  return {
    type: LOBBY_JOINED,
    payload
  };
}

export function lobbyLeft(payload: any): EventTypes {
  return {
    type: LOBBY_LEFT,
    payload
  };
}

export function cardPlayed(payload: any): EventTypes {
  return {
    type: CARD_PLAYED,
    payload
  };
}

export function cardDrawn(payload: any): EventTypes {
  return {
    type: CARD_DRAWN,
    payload
  };
}

export function cardVoted(payload: any): EventTypes {
  return {
    type: CARD_VOTED,
    payload
  };
}

export function connected(payload: any): EventTypes {
  return {
    type: CONNECTED,
    payload
  };
}

export function codeUpdated(payload: any): EventTypes {
  return {
    type: CODE_UPDATED,
    payload
  };
}

export function gameStarted(payload: any) {
  return (dispatch: Dispatch, getState: () => State) => {
    const player = getState().player;
    if (player.name === "SCREEN" ) {
      dispatch(push(`/screen/${getState().player.code}/game`));
    } else {
      dispatch(push(`/game/${getState().player.code}`));
    }
    return dispatch({ type: "gameStarted", payload });
  };
}

export function fetchGame(code: string) {
  return async (dispatch: Dispatch) => {
    var response = await Apiclient.get(`/lobby?code=${code}`);
    console.log(response.data);
    dispatch({
      type: GAME_FETCHED,
      payload: response.data
    });
  };
}
