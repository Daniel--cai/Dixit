/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import * as styles from "./PlayerBoard.styles";

export const PlayerBoard: React.FC = () => {
  const game = useSelector((store: State) => store.game);
  console.log(game.score);
  return (
    <div sx={styles.playerBoardCss}>
      {game.score.map(score => (
        <div key={score.name}>
          {score.name}: {score.score} (+{score.scored})
        </div>
      ))}
    </div>
  );
};
