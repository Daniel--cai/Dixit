import { createStore, applyMiddleware, compose } from "redux";
import { signalRMiddleware } from "../middleware/signalRMiddleware";
import { createBrowserHistory } from "history";
import createRootReducer from "./reducer";
import { routerMiddleware, RouterState } from "connected-react-router";

export interface State {
  name: string;
  code: string;
  players: string[];
  connected: boolean;
  router: RouterState;
}

export const history = createBrowserHistory();

export function configureStore() {
  const store = createStore(
    createRootReducer(history),
    compose(applyMiddleware(routerMiddleware(history), signalRMiddleware))
  );

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducer", () =>
      store.replaceReducer(createRootReducer(history))
    );
  }

  return store;
}
