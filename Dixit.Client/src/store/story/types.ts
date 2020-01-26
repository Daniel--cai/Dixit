export const UPDATE_CODE = "UPDATE_CODE";
export const GAME_STARTED = "GAME_STARTED";
export const ROUND_FINISHED = "ROUND_FINISHED";
export const STORY_REVEALED = "STORY_REVEALED";
export const GAME_FETCHED = "GAME_FETCHED";

import { Vote } from "../game/models";
import {
  GameStartedEvent,
  RoundFinishedEvent,
  StoryToldEvent,
  GameFetchedEvent,
  StoryRevealedEvent
} from "../events/types";

export interface StoryState {
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
  | GameStartedEvent
  | StoryRevealedEvent
  | StoryToldEvent;
