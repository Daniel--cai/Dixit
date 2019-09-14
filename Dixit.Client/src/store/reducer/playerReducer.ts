import { Actions, AnyAction } from "..";
import { LobbyJoined } from "../../client/events";

export function playerReducer(
  state: string[] = [],
  action: AnyAction<Actions>
): string[] {
  switch (action.type) {
    case "lobbyJoined":
      console.log("udpateing lobby with", action.payload.player);
      return [...state, (action.payload as LobbyJoined).player];
    default:
      return state;
  }
}
