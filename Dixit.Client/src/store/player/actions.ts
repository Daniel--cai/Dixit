import { PlayerActionTypes, CONNECT } from "./types";

export function connect(code: string, name: string): PlayerActionTypes {
  return {
    type: CONNECT,
    code,
    name
  };
}
