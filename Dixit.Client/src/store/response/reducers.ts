import { ResponseActionTypes, UPDATE_CODE, ResponseState } from "./types";
import {
  GAME_STARTED,
  ROUND_FINISHED,
  STORY_REVEALED,
  GAME_FETCHED
} from "../events/types";
import { FETCH_GAME } from "../game/types";

const initialState: ResponseState = {
  votes: [],
  revealed: []
};

export function responseReducer(
  state: ResponseState = initialState,
  action: ResponseActionTypes
): ResponseState {
  switch (action.type) {
    case STORY_REVEALED: {
      return { ...state, revealed: action.payload.cards };
    }
    case GAME_FETCHED: {
      return {
        ...state,
        revealed: action.payload.cards,
        votes: action.payload.votes || []
      };
    }
    case ROUND_FINISHED: {
      return { ...state, votes: action.payload.votes };
    }

    default:
      return state;
  }
}
