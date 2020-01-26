/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { Apiclient } from "../../api/api";
import { Images } from "../card-images";
import "./GameState.scss";
import { InputModal } from "../modal/Modal";
import { Card } from "../card/Card";
import { Banner } from "../banner/Banner";
import { Carousel } from "../carousel/Carousel";
import * as styles from "./GameState.styles";

export const StoryState: React.FC<{ code: string }> = props => {
  const [storyInput, setStoryInput] = useState("");
  const [card, setCard] = useState(2);
  const player = useSelector((store: State) => store.player);
  const story = useSelector((store: State) => store.story);
  const storyTeller = story.currentStoryTeller;
  const [showModal, setShowModel] = useState(false);

  const pickCard = (card: number) => async () => {
    setCard(card);
    setShowModel(true);

  };

  const hideModal = () => {
    setShowModel(false);
  };

  const tellStory = async () => {
    await Apiclient.tellStory({
      code: props.code,
      story: storyInput,
      card: card,
      storyTeller: player.name
    });
  };

  return (
    <React.Fragment>
      <InputModal
        show={showModal}
        message={"...and tell a story"}
        submit={async () => await tellStory()}
        hide={hideModal}
        story={storyInput}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setStoryInput(e.target.value)}
      />
      <div sx={styles.storyStateCss}>
        {storyTeller === player.name && (
          <Banner >
            <div>
              You are the storyteller.
          </div>
            <div>
              <b>Pick a card</b> and tell a story.
          </div>
          </Banner>
        )}

        {storyTeller !== player.name && (
          <p> {storyTeller} is currently telling a story</p>
        )}
        {storyTeller === player.name && (
          <Carousel>
            {player.hand.map(card => {
              return (
                <Card
                  key={card}
                  src={Images[card % 6]}
                  onClick={pickCard(card)}>
                </Card>
              );
            })}
          </Carousel>
        )}
      </div>
    </React.Fragment>
  );
};
