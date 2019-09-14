export interface Message {}
export interface Connect {
  name: string;
  code: string;
}

export interface StartGame {}

export interface LobbyJoined extends Message {
  player: string;
}

export interface StoryTold extends Message {
  storyTeller: string;
  story: string;
}

export interface CardSubmitted extends Message {
  player: string;
}

export interface CardVoted extends Message {
  player: string;
}

export interface StoryRevealed extends Message {
  cards: number[];
}

export interface RoundFinished extends Message {
  player: string;
  votes: Vote[];
  playerUpdates: PlayerUpdate[];
  nextStoryTeller: string;
}

export interface GameStarted extends Message {
  storyTeller: string;
}

export interface Connected {
  success: boolean;
}

export interface CodeUpdated {
  code: boolean;
}

export interface GameFetched {
  players: string[];
  roundNumber: number;
  round: any;
  gameState: string;
}

interface PlayerUpdate {
  name: string;
  hand: number[];
  score: number;
}

interface Vote {
  player: string;
  card: number;
}
