import { State, Actions, initialState, AnyAction } from ".";
import { LobbyJoined } from "../client/events";

export function rootReducer(
  state: State = initialState,
  action: AnyAction<Actions>
): State {
  console.log("reducer", action);
  switch (action.type) {
    case "lobbyJoined":
      console.log("udpateing lobby with", action.payload.player);
      return {
        ...state,
        players: [...state.players, (action.payload as LobbyJoined).player]
      };
    case "connect": {
      return {
        ...state,
        name: action.payload.name,
        code: action.payload.code,
        connected: true
      };
    }
    default:
      return state;
  }
}
