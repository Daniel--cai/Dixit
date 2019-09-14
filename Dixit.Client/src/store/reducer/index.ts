import { connectRouter } from "connected-react-router";
import { combineReducers, AnyAction } from "redux";
import { playerReducer } from "./playerReducer";
import { nameReducer } from "./nameReducer";
import { codeReducer } from "./codeReducer";
import { connectedReducer } from "./connectedReducer";
import { State } from "../store";

const createRootReducer = (history: any) =>
  combineReducers<State>({
    name: nameReducer,
    code: codeReducer,
    players: playerReducer,
    connected: connectedReducer,
    router: connectRouter(history) as any
  });
export default createRootReducer;
