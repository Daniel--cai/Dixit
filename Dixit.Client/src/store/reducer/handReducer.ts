import { Actions, AnyAction } from "..";
import { CardDrawn } from "../../client/events";

export function handReducer(
  state: number[] = [],
  action: AnyAction<Actions>
): number[] {
  switch (action.type) {
    case "cardDrawn":
      return (action.payload as CardDrawn).card;
    default:
      return state;
  }
}
