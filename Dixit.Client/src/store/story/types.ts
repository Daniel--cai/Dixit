export const UPDATE_CODE = "UPDATE_CODE";
import { Vote } from "../game/models";
import {
  GameStartedEvent,
  RoundFinishedEvent,
  StoryToldEvent,
  GameFetchedEvent
} from "../events/types";
import { FetchGameAction } from "../game/types";

export interface StoryState {
  cards: [];
  currentStoryTeller: string;
  storyCard: number;
  story: string;
  votes: Vote[];
  revealed: number[];
}

export type StoryActionTypes =
  | RoundFinishedEvent
  | GameStartedEvent
  | GameFetchedEvent
  | StoryToldEvent;
