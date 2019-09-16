import { connectRouter } from "connected-react-router";
import { combineReducers, AnyAction } from "redux";
import { playerReducer } from "./playerReducer";
import { nameReducer } from "./nameReducer";
import { codeReducer } from "./codeReducer";
import { storyTellerReducer } from "./storyTellerReducer";
import { storyReducer } from "./storyReducer";
import { revealedReducer } from "./revealedReducer";
import { gameStateReducer } from "./gameStateReducer";

import { connectedReducer } from "./connectedReducer";
import { State } from "../store";
import { handReducer } from "./handReducer";
import { scoreReducer } from "./scoreReducer";
import { voteReducer } from "./voteReducer";
import { storyCardReducer } from "./storyCardReducer";

const createRootReducer = (history: any) =>
  combineReducers<State>({
    name: nameReducer,
    code: codeReducer,
    hand: handReducer,
    revealed: revealedReducer,
    players: playerReducer,
    score: scoreReducer,
    vote: voteReducer,
    story: storyReducer,
    storyCard: storyCardReducer,
    storyTeller: storyTellerReducer,
    gameState: gameStateReducer,
    connected: connectedReducer,
    router: connectRouter(history) as any
  });
export default createRootReducer;
