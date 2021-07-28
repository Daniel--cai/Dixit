/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { Apiclient } from "../../api/api";
import { Card } from "../card/Card";
import { Banner } from "../banner/Banner";
import * as styles from "./GameState.styles";
import { Images } from "../cardImages";
import { Grid } from "../grid";
import { Player } from "../player-indicator/PlayerIndicator";
export const InProgressStateScreen: React.FC<{}> = (props) => {
  const player = useSelector((store: State) => store.player);
  const story = useSelector((store: State) => store.story);
  const players = useSelector((store: State) => store.game.players);
  const votes = useSelector((store: State) => store.story.votes);

  const playerIndicators: Player[] = players.map((player) => ({
    name: player.name,
    status: votes.find((vote) => vote.player == player.name)
      ? "neutral"
      : "loading",
  }));

  return (
    <Grid fanned>
      {story.revealed.sort().map((card) => {
        return <Card key={card} src={Images[card % 6]} />;
      })}
    </Grid>
  );
};
