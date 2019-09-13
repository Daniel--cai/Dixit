import { Actions, State, lobbyJoinedAction, AnyAction } from "../store";
import { MiddlewareAPI, Dispatch, Middleware } from "redux";
import * as signalR from "@aspnet/signalr";

interface SignalrHubConnection extends Omit<signalR.HubConnection, "on"> {
  on: (action: Actions, dispatch: (data: any) => void) => void;
}

export function rootReducer(state: State, action: AnyAction<Actions>) {
  switch (action.type) {
  }
}

const startSignalRConnection = (connection: signalR.HubConnection) =>
  connection
    .start()
    .then(() => console.info("SignalR Connected"))
    .catch(err => console.error("SignalR Connection Error: ", err));

export const signalRMiddleware: Middleware<Dispatch> = ({
  dispatch,
  getState
}: MiddlewareAPI<Dispatch<AnyAction<Actions>>, State>) => next => async (
  action: AnyAction<Actions>
) => {
  switch (action.type) {
    case "connect":
      const connectionHub = `/lobbyevents?name=${action.payload.name}&code=${action.payload.code}`;
      const connection: signalR.HubConnection = new signalR.HubConnectionBuilder()
        .withUrl(connectionHub)
        .build();
      await startSignalRConnection(connection);
      connection.on("lobbyJoined", data => dispatch(lobbyJoinedAction(data)));
      break;
    default:
      break;
  }
  return next(action);
};
