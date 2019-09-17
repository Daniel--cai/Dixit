import React, { useState } from "react";
// import logo from "../assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { connectAction, State } from "../store";
import { RouteComponentProps } from "react-router";
import Axios from "axios";
import { Apiclient } from "../api/api";
import "./Lobby.scss";

export const Lobby: React.FC<RouteComponentProps<{ code: string }>> = props => {
  var [name, setName] = useState("");
  var [code, setCode] = useState("");
  const dispatch = useDispatch();

  const players = useSelector((store: State) => store.players);
  const connected = useSelector((store: State) => store.connected);

  const createAndConnect = async () => {
    var createLobbyCommand = {};
    var response = await Apiclient.createLobby(createLobbyCommand);
    dispatch(connectAction({ name, code: response.data }));
  };

  const joinGame = async () => {
    dispatch(connectAction({ name, code }));
  };

  const startGame = async () => {
    await Axios.post("/api/lobby/startGame", { code: props.match.params.code });
  };

  const remaining = 8 - players.length;

  if (code != null && connected) {
    return (
      <div className="lobby">
        {players.map(player => (
          <div className="lobby__player" key={player}>
            {player}
          </div>
        ))}
        {new Array(remaining).fill(".").map(player => (
          <div className="lobby__player lobby__player--empty" key={player}>
            {player}
          </div>
        ))}
        <br />
        <button className="button" onClick={startGame}>
          Start Game
        </button>
      </div>
    );
  }

  return (
    <div className="landing-screen">
      <div className="landing-screen__input">
        <label className="label">name</label>
        <input
          className="input"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label className="label">code</label>
        <input
          className="input"
          value={code}
          onChange={e => setCode(e.target.value)}
          maxLength={4}
        />
      </div>
      <div className="button-group">
        <button className="button button--secondary" onClick={joinGame}>
          Join
        </button>
        <button className="button" onClick={createAndConnect}>
          Create
        </button>
      </div>
    </div>
  );
};
