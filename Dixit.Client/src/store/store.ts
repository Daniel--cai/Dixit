import { createStore, applyMiddleware, compose } from "redux";
import { signalRMiddleware } from "../middleware/signalRMiddleware";
import { createBrowserHistory } from "history";
import createRootReducer from "./reducer";
import { routerMiddleware, RouterState } from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import { GameState } from "../constants/GameState";

export interface State {
  name: string;
  code: string;
  players: string[];
  connected: boolean;
  router: RouterState;
  storyTeller: string;
  gameState: GameState;
}

export const history = createBrowserHistory();

export function configureStore() {
  const store = createStore(
    createRootReducer(history),
    compose(
      applyMiddleware(
        routerMiddleware(history),
        signalRMiddleware,
        thunkMiddleware
      )
    )
  );

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducer", () =>
      store.replaceReducer(createRootReducer(history))
    );
  }

  return store;
}
