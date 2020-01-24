/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import React, { useState, useCallback } from "react";
// import logo from "../assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../store/player/actions";
import { State } from "../store";
import { RouteComponentProps } from "react-router";
import Axios from "axios";
import { Apiclient } from "../api/api";
import Logo from "../assets/images/logo.png";
import { CSSTransition } from "react-transition-group";
import { Button } from "../components/button";
import { Spacing } from "../components/spacing";

import "./Lobby.scss";
import * as styles from "./Lobby.styles"
import { Input } from "../components/input/Input";

export const Lobby: React.FC<RouteComponentProps<{ code: string }>> = props => {
  var [name, setName] = useState("test");
  var [code, setCode] = useState("");
  const dispatch = useDispatch();

  const game = useSelector((store: State) => store.game);
  const player = useSelector((store: State) => store.player);

  const createAndConnect = async () => {
    var createLobbyCommand = {};
    var response = await Apiclient.createLobby(createLobbyCommand);
    dispatch(connect(response.data, name));
  };

  const joinGame = async () => {
    dispatch(connect(code, name));
  };

  const startGame = async () => {
    Apiclient.startLobby({ code: props.match.params.code })
  };

  console.log(game.players)

  const remaining = 8 - game.players.length;
  const [inProp, setInProp] = useState(true);
  const disconnectPlayer = useCallback(() => {
    //dispatch(removePlayer())
    console.log("sdf");
  }, [])
  if (code != null && player.connected) {
    return (
      <div sx={styles.lobbyScreenCss}>
        <div sx={styles.codeCss}>
          <div>{player.code}</div>
        </div>
        {/* className="lobby-screen__player-list " */}
        <div sx={styles.segmentCss} >
          {game.players.map((player, index) => (
            <div key={index} sx={styles.segmentLineCss}>
              <div sx={styles.textCss}><i className="fas fa-circle" sx={styles.indicatorCss} /> {player.name}</div>
              <div sx={styles.closeCss}><i className="fas fa-times" onClick={disconnectPlayer} /></div>
            </div>
          ))}
        </div>
        <div className="">
          <Spacing size="default">
            <Button primary onClick={startGame}>
              everyone's in
            </Button>
          </Spacing>
        </div>

        {/* <div className="lobby-screen__help">
          <button className="button__round" onClick={startGame}>
            <i className="fas fa-camera" />
          </button>
          <button className="button__round" onClick={startGame}>
            ?
          </button>
        </div> */}
      </div>
    );
  }

  return (
    <div className="landing-screen">
      <img className="landing-screen__logo" src={Logo}></img>
      <CSSTransition in={!inProp} timeout={0} classNames="t" unmountOnExit>
        <div className="landing-screen__actions">
          <Button onClick={() => setInProp(true)}> play </Button>
          <Button onClick={() => setInProp(false)}> how to play </Button>
        </div>
      </CSSTransition>
      <CSSTransition in={inProp} timeout={0} classNames="" unmountOnExit>
        <React.Fragment>
          <div className="landing-screen__input">
            <label className="label">name</label>
            <Input
              className="input"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label className="label">code</label>
            <Input
              className="input"
              value={code}
              onChange={e => setCode(e.target.value)}
            />
            <div className="button-group">
              <Button
                secondary
                onClick={joinGame}
                disabled={code === ""}>
                Join
              </Button>
              <Button
                onClick={createAndConnect}
                disabled={code !== ""}
              >
                Create
              </Button>
            </div>
          </div>
        </React.Fragment>
      </CSSTransition>
    </div>
  );
};
