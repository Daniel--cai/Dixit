/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { Apiclient } from "../../api/api";
import { Card } from "../card/Card";
import { Banner } from "../banner/Banner";
import * as styles from "./GameState.styles";
import { Carousel } from "../carousel/Carousel";
import { Images } from "../cardImages";

export const VotingState: React.FC<{ code: string }> = props => {
  const player = useSelector((store: State) => store.player);
  const story = useSelector((store: State) => store.story);
  
  const voteCard = (card: number) => async () => {
    await Apiclient.voteCard({
      code: props.code,
      card: card,
      player: player.name
    });
  };
  return (
    <div sx={styles.storyStateCss}>
      <Banner sx={{ }}>
        <div>
          <i>"{story.story}"</i>
        </div>
        <div>
          {
            story.currentStoryTeller === player.name &&
            <React.Fragment>Other players are still <b>voting</b></React.Fragment>
          }
          {
            story.currentStoryTeller !== player.name &&
            <React.Fragment><b>Find the card</b> that belong to {story.currentStoryTeller}</React.Fragment>
          }
        </div>
      </Banner>
      <Carousel>
        {story.revealed.sort().map(card => {
          return (
            <Card
              key={card}
              src={Images[card % 6]}
              onClick={voteCard(card)}>
            </Card>
          );
        })}
      </Carousel>
    </div >
  );
};
