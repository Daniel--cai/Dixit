/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../store";
import { RouteComponentProps } from "react-router";
import { push } from "connected-react-router";
import { GameState } from "../constants/GameState";
import * as styles from "./GameScreen.styles";
import {
  InProgressStateScreen,
  VotingStateScreen,
  StoryStateScreen
} from "../components/game-state";
import { PlayerBoard } from "../components/player-board/PlayerBoard";
import { Banner } from "../components/banner/Banner";
import { Player } from "../components/player-indicator"
import { ToastProvider } from "../components/toast/ToastContext";
export const GameScreen: React.FC<RouteComponentProps<{ code: string }>> = props => {
  const player = useSelector((store: State) => store.player);
  const game = useSelector((store: State) => store.game);
  const story = useSelector((store: State) => store.story);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!player.connected) {
      dispatch(push(`/screen/${props.match.params.code}`));
    }
    // eslint-disable-next-line
  }, []);
console.log(game.gameState)
  return (
    
    <div sx={styles.gameScreenCss}>
       <ToastProvider>
      {game.gameState === GameState.Story && (
        <StoryStateScreen />
      )}
      {game.gameState === GameState.Voting && (
        <VotingStateScreen />
      )}
      {game.gameState === GameState.InProgress && (
        <InProgressStateScreen />
      )}
      </ToastProvider>

      <PlayerBoard />

    </div>
  );
};
