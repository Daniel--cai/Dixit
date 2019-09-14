import React, { useState } from "react";
// import logo from "../assets/images/logo.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { connectAction, State, fetchGameAction } from "../store";
import { push } from "connected-react-router";
import { RouteComponentProps } from "react-router";
import Axios from "axios";

export const Lobby: React.FC<RouteComponentProps<{ code: string }>> = props => {
  var [name, setName] = useState("");
  var [code, setCode] = useState("");
  const dispatch = useDispatch();

  const players = useSelector((store: State) => store.players);
  const connected = useSelector((store: State) => store.connected);

  const createAndConnect = async () => {
    var createLobbyCommand = {};
    var response = await axios.post("/api/lobby", createLobbyCommand);
    dispatch(connectAction({ name, code: response.data }));
  };

  const joinGame = async () => {
    dispatch(connectAction({ name, code }));
    dispatch(fetchGameAction(code));
  };

  const startGame = async () => {
    await Axios.post("/api/lobby/startGame", { code: props.match.params.code });
  };

  if (code != null && connected) {
    return (
      <div>
        {players.map(player => (
          <p key={player}>{player}</p>
        ))}
        <br />
        <button onClick={startGame}>Start Game</button>
      </div>
    );
  }

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={code} onChange={e => setCode(e.target.value)} />
      <button onClick={createAndConnect}>Create</button>
      <button onClick={joinGame}>Join</button>
    </div>
  );
};
