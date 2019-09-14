import {
  Actions,
  State,
  lobbyJoinedAction,
  AnyAction,
  connectedAction
} from "../store";
import { MiddlewareAPI, Dispatch, Middleware } from "redux";
import * as signalR from "@aspnet/signalr";
import { push, CallHistoryMethodAction } from "connected-react-router";

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
}: MiddlewareAPI<
  Dispatch<AnyAction<Actions> | CallHistoryMethodAction>,
  State
>) => next => async (action: AnyAction<Actions>) => {
  if (!getState().connected && action.type === "connect") {
    const connectionHub = `/lobbyevents?name=${action.payload.name}&code=${action.payload.code}`;
    const connection: signalR.HubConnection = new signalR.HubConnectionBuilder()
      .withUrl(connectionHub)
      .build();
    await startSignalRConnection(connection);
    dispatch(connectedAction({ success: true }));
    dispatch(push(`/game/${action.payload.code}`));

    connection.on("lobbyJoined", data => dispatch(lobbyJoinedAction(data)));
  }
  return next(action);
};