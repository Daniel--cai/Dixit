import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../store";
import { RouteComponentProps } from "react-router";
import { push } from "connected-react-router";
import { GameState } from "../constants/GameState";
import { PlayerBoard } from "../components/player-board/PlayerBoard";
import { Field } from "../components/field/Field";
import { Modal } from "../components/modal/Modal";
import {
  InProgressState,
  VotingState,
  StoryState
} from "../components/game-state";

export const Game: React.FC<RouteComponentProps<{ code: string }>> = props => {
  const name = useSelector((store: State) => store.name);
  const scores = useSelector((store: State) => store.score);

  const gameState = useSelector((store: State) => store.gameState);
  const story = useSelector((store: State) => store.story);

  const connected = useSelector((store: State) => store.connected);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!connected) {
      dispatch(push("/"));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div>
        {/* <PlayerBoard /> */}
        {/* <p>State: {gameState}</p> */}
        {/* {gameState === GameState.InProgress ||
          (gameState === GameState.Voting && <p>Story: {story}</p>)}
        Name:{name} */}
        <Field />
        {gameState === GameState.Story && (
          <StoryState code={props.match.params.code} />
        )}
        {gameState === GameState.Voting && (
          <VotingState code={props.match.params.code} />
        )}
        {gameState === GameState.InProgress && (
          <InProgressState code={props.match.params.code} />
        )}
      </div>
    </div>
  );
};
