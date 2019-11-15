// export { Store } from "./reducer";

import { connectRouter, routerMiddleware } from "connected-react-router";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import { playerReducer } from "./player/reducers";
import { storyReducer } from "./story/reducers";
import { gameStateReducer } from "./game/reducers";

import { createBrowserHistory } from "history";
import { initialise } from "./initialise";
export const history = createBrowserHistory();
const rootReducer = combineReducers({
  player: playerReducer,
  story: storyReducer,
  game: gameStateReducer,
  router: connectRouter(history)
});

export type State = ReturnType<typeof rootReducer>;
const createRootReducer = (history: any) => rootReducer;

export function configureStore() {
  const store = createStore(
    createRootReducer(history),
    initialise(),
    compose(applyMiddleware(routerMiddleware(history)))
  );

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./", () =>
      store.replaceReducer(createRootReducer(history))
    );
  }

  return store;
}
