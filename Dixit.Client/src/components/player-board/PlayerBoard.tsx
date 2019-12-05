/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import * as styles from "./PlayerBoard.styles";
import { Banner } from "../banner/Banner";

export const PlayerBoard: React.FC = () => {
  const game = useSelector((store: State) => store.game);
  console.log(game.score);
  return (
    <table sx={styles.playerBoardCss}>
      {game.score.map((score, index) => (
        <Banner key={score.name}>
          <div sx={styles.playerBoardRankCss}>{index + 1}</div>
          {score.name}: {score.score} (+{score.scored})
        </Banner>
      ))}
    </table>
  );
};
