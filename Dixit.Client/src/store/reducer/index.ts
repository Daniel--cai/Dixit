import { connectRouter } from "connected-react-router";
import { combineReducers, AnyAction } from "redux";
import { playerReducer } from "./playerReducer";
import { nameReducer } from "./nameReducer";
import { codeReducer } from "./codeReducer";
import { storyTellerReducer } from "./storyTellerReducer";
import { gameStateReducer } from "./gameStateReducer";
import { connectedReducer } from "./connectedReducer";
import { State } from "../store";
import { handReducer } from "./handReducer";

const createRootReducer = (history: any) =>
  combineReducers<State>({
    name: nameReducer,
    code: codeReducer,
    hand: handReducer,
    players: playerReducer,
    storyTeller: storyTellerReducer,
    gameState: gameStateReducer,
    connected: connectedReducer,
    router: connectRouter(history) as any
  });
export default createRootReducer;
