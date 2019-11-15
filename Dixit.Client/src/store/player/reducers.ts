import { PlayerActionTypes, PlayerState, CONNECT } from "./types";

import { CARD_DRAWN, CONNECTED, GAME_FETCHED } from "../events/types";
import { FETCH_GAME } from "../game/types";

const initialState: PlayerState = {
  name: "",
  code: "",
  hand: [],
  connected: false
};

export function playerReducer(
  state: PlayerState = initialState,
  action: PlayerActionTypes
): PlayerState {
  switch (action.type) {
    case CONNECTED: {
      return { ...state, connected: true };
    }
    case CONNECT: {
      return { ...state, code: action.code };
    }
    case CARD_DRAWN:
      console.log("cardDrawn");
      console.log(action.payload.card);
      return { ...state, hand: action.payload.card };
    case GAME_FETCHED:
      console.log("fetchGame");
      console.log(action.payload.hand);
      return { ...state, hand: action.payload.hand };
    default:
      return state;
  }
}
