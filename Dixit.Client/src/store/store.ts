import { createStore, applyMiddleware, compose } from "redux";
import { signalRMiddleware } from "../middleware/signalRMiddleware";
import { createBrowserHistory } from "history";
import createRootReducer from "./reducer";
import { routerMiddleware, RouterState } from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import { GameState } from "../constants/GameState";
import { Vote, Scoreboard } from "../client/events";

export interface State {
  name: string;
  code: string;
  hand: number[];
  revealed: number[];
  score: Scoreboard[];
  vote: Vote[];
  players: string[];
  story: string;
  storyCard: number;
  storyTeller: string;
  connected: boolean;
  router: RouterState;
  gameState: GameState;
}

const initialState: State = {
  name: "bob",
  code: "1234",
  hand: [1, 2, 3, 4, 5, 6],
  revealed: [],
  score: [
    { name: "bob", score: 0, scored: 0 },
    { name: "smith", score: 0, scored: 0 },
    { name: "jones", score: 0, scored: 0 },
    { name: "pear", score: 0, scored: 0 }
  ],
  vote: [],
  players: ["bob", "smith", "jones", "pear"],
  story: "",
  storyCard: 0,
  storyTeller: "bob",
  connected: true,
  gameState: GameState.Story,
  router: {
    location: {
      pathname: "",
      search: "",
      state: "",
      hash: "",
      key: undefined
    },
    action: "REPLACE"
  }
};

export interface State {
  name: string;
  code: string;
  hand: number[];
  revealed: number[];
  score: Scoreboard[];
  vote: Vote[];
  players: string[];
  story: string;
  storyCard: number;
  storyTeller: string;
  connected: boolean;
  router: RouterState;

  gameState: GameState;
}

export const history = createBrowserHistory();

export function configureStore() {
  const store = createStore(
    createRootReducer(history),
    initialState,
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
