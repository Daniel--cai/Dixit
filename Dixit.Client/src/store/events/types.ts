import { Vote, Game } from "../game/models";

import { Scoreboard } from "./models";

export const CONNECTED = "connected";
export const CODE_UPDATED = "codeUpdated";
export const GAME_FETCHED = "gameFetched";
export const CARD_DRAWN = "cardDrawn";
export const CARD_VOTED = "cardVoted";
export const LOBBY_JOINED = "lobbyJoined";
export const LOBBY_LEFT = "lobbyLeft";
export const GAME_STARTED = "gameStarted";
export const STORY_TOLD = "storyTold";
export const STORY_REVEALED = "storyRevealed";
export const CARD_PLAYED = "cardPlayed";
export const ROUND_FINISHED = "roundFinished";

export interface ConnectedEvent {
  type: typeof CONNECTED;
  payload: {
    success: boolean;
  };
}

export interface LobbyJoinedEvent {
  type: typeof LOBBY_JOINED;
  payload: {
    player: string;
  };
}

export interface LobbyLeftEvent {
  type: typeof LOBBY_LEFT;
  payload: {
    player: string;
  };
}

export interface GameStartedEvent {
  type: typeof GAME_STARTED;
  payload: {
    storyTeller: string;
    players: string[];
  };
}

export interface CodeUpdatedEvent {
  type: typeof CODE_UPDATED;
  payload: { code: boolean };
}

export interface CardPlayedEvent {
  type: typeof CARD_PLAYED;
  payload: { player: string };
}

export interface RoundFinishedEvent {
  type: typeof ROUND_FINISHED;
  payload: {
    votes: Vote[];
    playerUpdates: Scoreboard[];
    nextStoryTeller: string;
    storyCard: number;
  };
}

export interface CardDrawnEvent {
  type: typeof CARD_DRAWN;
  payload: {
    player: string;
    card: number[];
  };
}

export interface CardVotedEvent {
  type: typeof CARD_VOTED;
  payload: {
    player: string;
  };
}

export interface StoryToldEvent {
  type: typeof STORY_TOLD;
  payload: { storyTeller: string; story: string };
}
export interface StoryRevealedEvent {
  type: typeof STORY_REVEALED;
  payload: { cards: number[] };
}

export interface GameFetchedEvent {
  type: typeof GAME_FETCHED;
  payload: Game;
}

export type EventTypes =
  | ConnectedEvent
  | LobbyJoinedEvent
  | LobbyLeftEvent
  | GameStartedEvent
  | CodeUpdatedEvent
  | CardPlayedEvent
  | RoundFinishedEvent
  | CardDrawnEvent
  | CardVotedEvent
  | StoryToldEvent
  | StoryRevealedEvent
  | GameFetchedEvent;
