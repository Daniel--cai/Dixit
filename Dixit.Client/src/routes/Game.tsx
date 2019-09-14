import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../store";
import { RouteComponentProps } from "react-router";
import { push } from "connected-react-router";

export const Game: React.FC<RouteComponentProps<{ code: string }>> = props => {
  const router = useSelector((store: State) => store.router);
  const name = useSelector((store: State) => store.name);
  const code = useSelector((store: State) => store.code);
  const players = useSelector((store: State) => store.players);
  const connected = useSelector((store: State) => store.connected);
  const dispatch = useDispatch();
  if (!connected) {
    dispatch(push("/"));
  }
  return (
    <div>
      <div>
        {players.map(player => (
          <p key={player}>{player}</p>
        ))}
        Game:sddsdgsdgsdgdsd{name} {code}
      </div>
    </div>
  );
};
