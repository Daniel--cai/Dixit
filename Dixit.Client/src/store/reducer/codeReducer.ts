import { Actions, AnyAction } from "..";
export function codeReducer(
  state: string = "",
  action: AnyAction<Actions>
): string {
  switch (action.type) {
    case "connect": {
      return action.payload.code;
    }
    default:
      return state;
  }
}
