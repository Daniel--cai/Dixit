import { GameState } from "../constants/GameState";

export interface Message {}
export interface Connect {
  name: string;
  code: string;
}

export interface StartGame {}

export interface LobbyJoined extends Message {
  player: string;
}

export interface LobbyLeft extends Message {
  player: string;
}

export interface StoryTold extends Message {
  storyTeller: string;
  story: string;
}

export interface CardPlayed extends Message {
  player: string;
}

export interface CardDrawn extends Message {
  player: string;
  card: number[];
}

export interface CardVoted extends Message {
  player: string;
}

export interface StoryRevealed extends Message {
  cards: number[];
}

export interface RoundFinished extends Message {
  votes: Vote[];
  playerUpdates: Scoreboard[];
  nextStoryTeller: string;
  storyCard: number;
}

export interface GameStarted extends Message {
  storyTeller: string;
  players: string[];
}

export interface Connected {
  success: boolean;
}

export interface CodeUpdated {
  code: boolean;
}

export interface GameFetched {
  players: Player[];
  roundNumber: number;
  gameState: GameState;
  currentStoryTeller: string;
  storyCard: number;
  story: string;
  cards: number[];
  votes: Vote[];
  hand: number[];
}

interface Player {
  name: string;
  score: number;
}

export interface Scoreboard {
  name: string;
  score: number;
  scored: number;
}

export interface Vote {
  player: string;
  card: number;
}
