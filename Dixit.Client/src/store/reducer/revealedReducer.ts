import { Actions, AnyAction } from "..";
import { StoryRevealed, GameFetched } from "../../client/events";
export function revealedReducer(
  state: number[] = [],
  action: AnyAction<Actions>
): number[] {
  switch (action.type) {
    case "storyRevealed": {
      return (action.payload as StoryRevealed).cards;
    }
    case "fetchGame": {
      return (action.payload as GameFetched).cards;
    }

    default:
      return state;
  }
}
