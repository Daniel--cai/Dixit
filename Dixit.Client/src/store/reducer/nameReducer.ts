import { Actions, AnyAction } from "..";

export function nameReducer(
  state: string = "",
  action: AnyAction<Actions>
): string {
  switch (action.type) {
    case "connect": {
      return action.payload.name;
    }
    default:
      return state;
  }
}
