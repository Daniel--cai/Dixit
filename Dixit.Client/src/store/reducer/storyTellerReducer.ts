import { Actions, AnyAction } from "..";
export function storyTellerReducer(
  state: string = "",
  action: AnyAction<Actions>
): string {
  switch (action.type) {
    case "gameStarted": {
      return action.payload.storyTeller;
    }
    default:
      return state;
  }
}
