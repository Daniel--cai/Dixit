export enum GameState {
  Lobby = "Lobby",
  InProgress = "InProgress",
  Story = "Story",
  Voting = "Voting",
  GameOver = "GameOver"
}

export interface Game {
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



export interface Player {
  name: string;
  score: number;
}
export interface Vote {
  player: string;
  card: number;
}
