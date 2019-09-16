import { Actions, AnyAction } from "..";
import { StoryTold } from "../../client/events";
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
    default:
      return state;
  }
}
