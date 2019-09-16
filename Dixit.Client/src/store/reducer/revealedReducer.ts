import { Actions, AnyAction } from "..";
import { StoryRevealed } from "../../client/events";
export function revealedReducer(
  state: number[] = [],
  action: AnyAction<Actions>
): number[] {
  switch (action.type) {
    case "storyRevealed": {
      return (action.payload as StoryRevealed).cards;
    }
    default:
      return state;
  }
}
