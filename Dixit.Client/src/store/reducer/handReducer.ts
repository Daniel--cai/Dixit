import { Actions, AnyAction } from "..";
import { CardDrawn, GameFetched } from "../../client/events";

export function handReducer(
  state: number[] = [],
  action: AnyAction<Actions>
): number[] {
  switch (action.type) {
    case "cardDrawn":
      console.log("cardDrawn");
      console.log((action.payload as CardDrawn).card);
      return (action.payload as CardDrawn).card;
    case "fetchGame":
      console.log("fetchGame");
      console.log((action.payload as GameFetched).hand);
      return (action.payload as GameFetched).hand;
    default:
      return state;
  }
}
