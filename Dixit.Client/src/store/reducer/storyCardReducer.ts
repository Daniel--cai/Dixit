import { Actions, AnyAction } from "..";
import { RoundFinished, GameFetched } from "../../client/events";
export function storyCardReducer(
  state: number = -1,
  action: AnyAction<Actions>
): number {
  switch (action.type) {
    case "roundFinished": {
      return (action.payload as RoundFinished).storyCard;
    }
    case "fetchGame": {
      return (action.payload as GameFetched).storyCard;
    }
    default:
      return state;
  }
}
