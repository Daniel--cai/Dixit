export interface CreateLobbyCommand {}

export interface JoinLobbyCommand {
  name: string;
  code: string;
}

export interface StartLobbyCommand {
  code: string;
}
export interface PlayCardCommand {
  code: string;
  player: string;
  card: number;
}
export interface TellStoryCommand {
  storyTeller: string;
  code: string;
  card: number;
  story: string;
}
export interface VoteCardCommand {
  code: string;
  player: string;
  card: number;
}
