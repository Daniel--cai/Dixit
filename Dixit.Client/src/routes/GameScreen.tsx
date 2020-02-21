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
  InProgressState,
  VotingStateScreen,
  StoryState
} from "../components/game-state";
import { PlayerBoard } from "../components/player-board/PlayerBoard";
import { Banner } from "../components/banner/Banner";
import { PlayerIndicator, Player } from "../components/player-indicator"
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

  return (
    <div sx={styles.gameScreenCss}>
    
        {game.gameState === GameState.Story && (
          <StoryState code={props.match.params.code} />
        )}
        {game.gameState === GameState.Voting && (
          <VotingStateScreen />
        )}
        {game.gameState === GameState.InProgress && (
          <InProgressState code={props.match.params.code} />
        )}
        
 
      <PlayerBoard />

    </div>
  );
};
