import { Actions, AnyAction } from "..";
import {
  RoundFinished,
  Scoreboard,
  GameFetched,
  GameStarted
} from "../../client/events";

export function scoreReducer(
  state: Scoreboard[] = [],
  action: AnyAction<Actions>
): Scoreboard[] {
  switch (action.type) {
    case "fetchGame": {
      const payload = action.payload as GameFetched;
      return payload.players.map(player => ({ ...player } as Scoreboard));
    }
    case "gameStarted": {
      const payload = action.payload as GameStarted;
      return payload.players.map(
        player => ({ name: player, score: 0 } as Scoreboard)
      );
    }

    case "roundFinished": {
      console.log(action.payload);
      var updates = (action.payload as RoundFinished).playerUpdates;
      return state.map(player => {
        let scored = 0;
        const update = updates.find(prev => prev.name === player.name);
        if (update) scored = update.score;
        return {
          name: player.name,
          score: player.score + scored,
          scored
        };
      });
    }
    default:
      return state;
  }
}
