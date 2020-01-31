import { PlayerActionTypes, CONNECT } from "./types";

export function connect(code: string, name: string, screen: boolean = false): PlayerActionTypes {
  return {
    type: CONNECT,
    code,
    name,
    screen
  };
}
