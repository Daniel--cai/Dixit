import { Actions, AnyAction } from "..";
import { RoundFinished, Vote, GameFetched } from "../../client/events";
export function voteReducer(
  state: Vote[] = [],
  action: AnyAction<Actions>
): Vote[] {
  switch (action.type) {
    case "roundFinished": {
      return (action.payload as RoundFinished).votes;
    }

    case "fetchGame": {
      return (action.payload as GameFetched).votes || [];
    }

    default:
      return state;
  }
}
