import {
  lobbyJoined,
  lobbyLeft,
  connected,
  gameStarted,
  storyTold,
  cardPlayed,
  cardVoted,
  roundFinished,
  storyRevealed,
  cardDrawn,
  fetchGame
} from "../store/events/actions";
import { State } from "../store";
import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from "redux";
import * as signalR from "@aspnet/signalr";
import { push } from "connected-react-router";

// interface SignalrHubConnection extends Omit<signalR.HubConnection, "on"> {
//   on: (action: Actions, dispatch: (data: any) => void) => void;
// }

const startSignalRConnection = (connection: signalR.HubConnection) =>
  connection
    .start()
    .then(() => console.info("SignalR Connected"))
    .catch(err => console.error("SignalR Connection Error: ", err));

export const signalRMiddleware: Middleware<Dispatch> = ({
  dispatch,
  getState
}: MiddlewareAPI<any, State>) => next => async (action: AnyAction) => {
  if (!getState().player.connected && action.type === "connect") {
    const name = action.name;
    const code = action.code;
    const connectionHub = `/lobbyevents?name=${name}&code=${code}`;
    const connection: signalR.HubConnection = new signalR.HubConnectionBuilder()
      .withUrl(connectionHub)
      .build();
    await startSignalRConnection(connection);

    dispatch(connected({ success: true }));
    dispatch(push(`/lobby/${code}`));
    dispatch(fetchGame(code));

    connection.on("lobbyJoined", data => dispatch(lobbyJoined(data)));
    connection.on("lobbyLeft", data => dispatch(lobbyLeft(data)));
    connection.on("lobbyStarted", data => dispatch(gameStarted(data)));
    connection.on("storyTold", data => dispatch(storyTold(data)));
    connection.on("cardDrawn", data => dispatch(cardDrawn(data)));
    connection.on("cardPlayed", data => dispatch(cardPlayed(data)));
    connection.on("cardVoted", data => dispatch(cardVoted(data)));
    connection.on("roundFinished", data => dispatch(roundFinished(data)));
    connection.on("storyRevealed", data => dispatch(storyRevealed(data)));
  }
  return next(action);
};
