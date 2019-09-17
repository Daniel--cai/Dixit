import { Actions, AnyAction } from "..";
import { StoryTold, GameFetched } from "../../client/events";
export function storyReducer(
  state: string = "",
  action: AnyAction<Actions>
): string {
  switch (action.type) {
    case "storyTold": {
      console.log(action.payload);
      return (action.payload as StoryTold).story;
    }

    case "roundFinished": {
      return "";
    }

    case "fetchGame": {
      return (action.payload as GameFetched).story || "";
    }

    default:
      return state;
  }
}
