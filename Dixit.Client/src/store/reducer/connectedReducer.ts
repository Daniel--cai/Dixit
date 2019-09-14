import { Actions, AnyAction } from "..";

export function connectedReducer(
  state: boolean = false,
  action: AnyAction<Actions>
): boolean {
  switch (action.type) {
    case "connected": {
      return true;
    }
    default:
      return state;
  }
}
