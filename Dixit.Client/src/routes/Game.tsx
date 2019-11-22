import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../store";
import { RouteComponentProps } from "react-router";
import { push } from "connected-react-router";
import { GameState } from "../constants/GameState";
import { Field } from "../components/field/Field";
import {
  InProgressState,
  VotingState,
  StoryState
} from "../components/game-state";

export const Game: React.FC<RouteComponentProps<{ code: string }>> = props => {
  const player = useSelector((store: State) => store.player);
  const game = useSelector((store: State) => store.game);
  const story = useSelector((store: State) => store.story);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!player.connected) {
      dispatch(push("/"));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* <PlayerBoard /> */}
      {/* <p>State: {gameState}</p> */}
      {/* {gameState === GameState.InProgress ||
          (gameState === GameState.Voting && <p>Story: {story}</p>)}
        Name:{name} */}
      <Field />
      {game.gameState === GameState.Story && (
        <StoryState code={props.match.params.code} />
      )}
      {game.gameState === GameState.Voting && (
        <VotingState code={props.match.params.code} />
      )}
      {game.gameState === GameState.InProgress && (
        <InProgressState code={props.match.params.code} />
      )}
    </>
  );
};
