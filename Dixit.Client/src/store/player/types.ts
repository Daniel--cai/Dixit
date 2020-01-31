import { FetchGameAction } from "../game/types";
import {
  LobbyJoinedEvent,
  LobbyLeftEvent,
  CardDrawnEvent,
  ConnectedEvent,
  GameFetchedEvent
} from "../events/types";
export const CONNECT = "connect";

export interface PlayerState {
  name: string;
  code: string;
  hand: number[];
  connected: boolean;
}

export interface ConnectAction {
  type: typeof CONNECT;
  name: string;
  code: string;
  screen: boolean
}

export type PlayerActionTypes =
  | ConnectAction
  | ConnectedEvent
  | LobbyJoinedEvent
  | LobbyLeftEvent
  | CardDrawnEvent
  | GameFetchedEvent;
