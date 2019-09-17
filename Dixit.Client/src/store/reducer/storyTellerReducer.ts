import { Actions, AnyAction } from "..";
import { RoundFinished, GameFetched } from "../../client/events";
export function storyTellerReducer(
  state: string = "",
  action: AnyAction<Actions>
): string {
  switch (action.type) {
    case "gameStarted": {
      return action.payload.storyTeller;
    }
    case "roundFinished": {
      return (action.payload as RoundFinished).nextStoryTeller;
    }

    case "fetchGame": {
      return (action.payload as GameFetched).currentStoryTeller;
    }

    default:
      return state;
  }
}
