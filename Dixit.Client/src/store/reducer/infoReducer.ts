import { Actions, AnyAction } from "..";

export interface Info {
  name: string;
  code: string;
}

export function infoReducer(
  state: Info = { name: "", code: "" },
  action: AnyAction<Actions>
): Info {
  switch (action.type) {
    case "connect": {
      return {
        name: action.payload.name,
        code: action.payload.code
      };
    }
    default:
      return state;
  }
}
