import { Actions, AnyAction } from "..";
import { RoundFinished } from "../../client/events";

export interface Info {
  name: string;
  code: string;
}

export function handReducer(
  state: number[] = [],
  action: AnyAction<Actions>
): number[] {
  switch (action.type) {
    case "roundFinished": {
      return action.payload;
    }
    default:
      return state;
  }
}
