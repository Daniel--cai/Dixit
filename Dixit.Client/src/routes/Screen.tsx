/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useCallback } from "react";
// import logo from "../assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../store";
import { RouteComponentProps } from "react-router";
import { Apiclient } from "../api/api";
import Logo from "../assets/images/logo.png";
import { CSSTransition } from "react-transition-group";
import { Button } from "../components/button";

import "./Lobby.scss";
import * as styles from "./Lobby.styles"
import { push } from "connected-react-router";
import { connect } from "../store/player/actions";

export const Screen: React.FC<RouteComponentProps<{ code: string }>> = props => {
  const dispatch = useDispatch();
  const code = props.match.params.code
  const game = useSelector((store: State) => store.game);
  const player = useSelector((store: State) => store.player);

  const createAndConnect = async () => {
    var createLobbyCommand = {};
    var response = await Apiclient.createLobby(createLobbyCommand);
    dispatch(push(`/screen/${response.data}`))
  };
  if (code != null && code != "" && !player.connected) {
    dispatch(connect(code, "SCREEN", true));
  } else if(player.connected && game.loaded){
    dispatch(push(`/screen/${code}/game`))
  }

  const [inProp, setInProp] = useState(true);
  const disconnectPlayer = useCallback(() => {
    //dispatch(removePlayer())
    console.log("sdf");
  }, [])
  return (
    <div sx={styles.landingScreen.container}>
      <img sx={styles.landingScreen.logo} src={Logo}></img>
      <CSSTransition in={!inProp} timeout={0} classNames="t" unmountOnExit>
        <div sx={styles.landingScreen.actions}>
          <Button onClick={() => setInProp(true)}> play </Button>
          <Button onClick={() => setInProp(false)}> how to play </Button>
        </div>
      </CSSTransition>
      {code == "" || code == null &&
        <div sx={styles.landingScreen.input}>
          <Button
            onClick={createAndConnect}
          >
            Create
            </Button>
        </div>
      }
      {code != null && code !== "" &&
        < div sx={styles.lobbyScreenCss}>
          <div sx={styles.codeCss}>
            <div>{code}</div>
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
          <a target='_blank' href={`/lobby/${code}`}>
            /lobby/{code}
          </a>
        </div>
      }
    </div>
  );
};
