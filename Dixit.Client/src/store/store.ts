import { createStore, applyMiddleware, compose } from "redux";
import { signalRMiddleware } from "../middleware/signalRMiddleware";

import { rootReducer } from "./reducer";

export interface State {
  name: string;
  code: string;
  players: string[];
  connected: boolean;
}

export const initialState: State = {
  name: "",
  code: "",
  players: [],
  connected: false
};

export const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(signalRMiddleware))
);
