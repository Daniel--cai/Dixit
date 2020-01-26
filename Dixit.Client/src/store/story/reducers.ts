import { StoryActionTypes, UPDATE_CODE, StoryState } from "./types";
import {
  GAME_STARTED,
  ROUND_FINISHED,
  STORY_TOLD,
  GAME_FETCHED,
  STORY_REVEALED
} from "../events/types";

const initialState: StoryState = {
  currentStoryTeller: "",
  storyCard: 0,
  story: "",
  votes: [],
  revealed: []
};

export function storyReducer(
  state: StoryState = initialState,
  action: StoryActionTypes
): StoryState {
  switch (action.type) {
    case GAME_STARTED: {
      return { ...state, currentStoryTeller: action.payload.storyTeller };
    }
    case ROUND_FINISHED: {
      return {
        ...state,
        currentStoryTeller: action.payload.nextStoryTeller,
        storyCard: action.payload.storyCard,
        story: ""
      };
    }
    case GAME_FETCHED: {
      return {
        ...state,
        currentStoryTeller: action.payload.currentStoryTeller,
        storyCard: action.payload.storyCard,
        story: action.payload.story || ""
      };
    }
    case STORY_TOLD: {
      return { ...state, story: action.payload.story };
    }
    
    case STORY_REVEALED: {
      return { ...state, revealed: action.payload.cards };
    }
    case GAME_FETCHED: {
      return {
        ...state,
        revealed: action.payload.cards,
        votes: action.payload.votes || []
      };
    }
    case ROUND_FINISHED: {
      return { ...state, votes: action.payload.votes };
    }

    default:
      return state;
  }
}
