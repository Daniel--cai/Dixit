/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { Apiclient } from "../../api/api";
import { Card } from "../card/Card";
import { Banner } from "../banner/Banner";
import { Carousel } from "../carousel/Carousel";
import * as styles from "./GameState.styles";
import { Images } from "../cardImages";
export const InProgressState: React.FC<{ code: string }> = props => {
  const player = useSelector((store: State) => store.player);
  const story = useSelector((store: State) => store.story);

  const playCard = (card: number) => async () => {
    await Apiclient.playCard({
      code: props.code,
      card: card,
      player: player.name
    });
  };

  return (
    <div sx={styles.storyStateCss}>
      <Banner >
        <div>
          <i>"{story.story}"</i>
        </div>
        <div>
          {
            story.currentStoryTeller === player.name &&
            <React.Fragment>Other players are still <b>deciding</b></React.Fragment>
          }
          {
            story.currentStoryTeller !== player.name &&
            <React.Fragment><b>Pick a card</b> that best matches {story.currentStoryTeller}'s story</React.Fragment>
          }

        </div>
      </Banner>
      <Carousel>
        {player.hand.map(card => {
          return (
            <Card
              key={card}
              src={Images[card % 6]}
              onClick={playCard(card)}
            />
          );
        })}
      </Carousel>
    </div>
  );
};
