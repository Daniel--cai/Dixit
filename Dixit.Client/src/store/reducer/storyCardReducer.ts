import { Actions, AnyAction } from "..";
import { RoundFinished } from "../../client/events";
export function storyCardReducer(
  state: number = -1,
  action: AnyAction<Actions>
): number {
  switch (action.type) {
    case "roundFinished": {
      return (action.payload as RoundFinished).storyCard;
    }
    default:
      return state;
  }
}
