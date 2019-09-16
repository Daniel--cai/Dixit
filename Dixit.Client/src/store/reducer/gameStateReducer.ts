import { Actions, AnyAction } from "..";
import { GameState } from "../../constants/GameState";
export function gameStateReducer(
  state: GameState = GameState.Lobby,
  action: AnyAction<Actions>
): GameState {
  switch (action.type) {
    case "gameStarted": {
      return GameState.Story;
    }

    case "storyTold": {
      return GameState.InProgress;
    }
    case "storyRevealed": {
      return GameState.Voting;
    }

    case "roundFinished": {
      return GameState.Story;
    }
    default:
      return state;
  }
}
