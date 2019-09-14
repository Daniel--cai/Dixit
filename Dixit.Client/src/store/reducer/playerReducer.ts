import { Actions, AnyAction } from "..";
import { LobbyJoined, GameFetched } from "../../client/events";

export function playerReducer(
  state: string[] = [],
  action: AnyAction<Actions>
): string[] {
  switch (action.type) {
    case "lobbyJoined":
      console.log("udpateing lobby with", action.payload.player);
      return [...state, (action.payload as LobbyJoined).player];
    case "fetchGame":
      return (action.payload as GameFetched).players.map(
        (player: any) => player.name
      );
    default:
      return state;
  }
}
