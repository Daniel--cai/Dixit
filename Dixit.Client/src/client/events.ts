export interface Message {}

export interface Connect {
  name: string;
  code: string;
}

export interface LobbyJoined {
  player: string;
}

export interface GameStarted extends Message {
  player: string;
}
