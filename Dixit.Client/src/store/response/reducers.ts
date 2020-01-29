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
    

    default:
      return state;
  }
}
