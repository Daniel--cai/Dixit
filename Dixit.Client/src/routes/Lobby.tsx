import React, { useState } from "react";
// import logo from "../assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { connectAction, State } from "../store";
import { RouteComponentProps } from "react-router";
import Axios from "axios";
import { Apiclient } from "../api/api";
import Logo from "../assets/images/logo.png";
import { CSSTransition } from "react-transition-group";
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

  const [inProp, setInProp] = useState(false);

  if (code != null && connected) {
    return (
      <div className="lobby-screen">
        <div className="lobby-screen__code">
          <div className="lobby-screen__code__text">1234</div>
        </div>
        <div className="lobby-screen__player-list ">
          {players.map(player => (
            <div className="lobby-screen__player" key={player}>
              <span>{player}</span>
            </div>
          ))}
          {new Array(remaining).fill(".").map(player => (
            <div
              key={player}
              className="lobby-screen__player lobby-screen__player--empty"
            >
              <span>{player}</span>
            </div>
          ))}
        </div>
        <div className="lobby-screen__actions">
          <button className="button" onClick={startGame}>
            everyone's in
          </button>
        </div>

        <div className="lobby-screen__help">
          <button
            className="button__round button__round--red"
            onClick={startGame}
          ></button>
          <button className="button__round" onClick={startGame}>
            ?
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="landing-screen">
      <img className="landing-screen__logo" src={Logo}></img>
      <CSSTransition in={!inProp} timeout={0} classNames="t" unmountOnExit>
        <div className="landing-screen__actions">
          <div onClick={() => setInProp(true)}> play </div>
          <div onClick={() => setInProp(false)}> how to play </div>
        </div>
      </CSSTransition>
      <CSSTransition in={inProp} timeout={0} classNames="" unmountOnExit>
        <>
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
            <div className="button-group">
              <button className="button button--secondary" onClick={joinGame}>
                Join
              </button>
              <button className="button" onClick={createAndConnect}>
                Create
              </button>
            </div>
          </div>
        </>
      </CSSTransition>
    </div>
  );
};
