import { Actions, AnyAction } from "..";
import { RoundFinished, Vote } from "../../client/events";
export function voteReducer(
  state: Vote[] = [],
  action: AnyAction<Actions>
): Vote[] {
  switch (action.type) {
    case "roundFinished": {
      return (action.payload as RoundFinished).votes;
    }
    default:
      return state;
  }
}
