export const UPDATE_CODE = "UPDATE_CODE";
import { Vote } from "../game/models";
import {
  GameStartedEvent,
  RoundFinishedEvent,
  StoryRevealedEvent,
  GameFetchedEvent
} from "../events/types";
import { FetchGameAction } from "../game/types";

export interface ResponseState {
  votes: Vote[];
  revealed: number[];
}

export type ResponseActionTypes =
  | RoundFinishedEvent
  | GameStartedEvent
  | StoryRevealedEvent
  | GameFetchedEvent;
