/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { Apiclient } from "../../api/api";
import Image1 from "../../assets/cards/1.png";
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
          <Banner sx={{ width: ["100%", "100%", "30rem"], marginLeft: "auto", marginRight: "auto" }}>
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
          <React.Fragment>
            {/* <div sx={{
              display: "grid",
              gridTemplateColumns: ["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"],
              gridRowGap: "sm",
              gridColumnGap: "sm",
            }}> */}
            <Carousel>
              {player.hand.map(card => {
                return (
                  <Card
                    key={card}
                    sx={{
                      height: "100%",
                      backgroundImage: `url(${Image1})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      backgroundPosition: "center"
                    }}
                    onClick={pickCard(card)}>
                    {/* <img
                      sx={{
                        width: "100%",
                        height: "100%",

                        boxShadow: "deep",
                        borderRadius: "soft",
                      }}
                      src={Image1}
                      alt={`image-${card}`}

                    /> */}
                  </Card>
                );
              })}
            </Carousel>
            {/* </div> */}
            {/* <div className="action">
              <button className="button" onClick={pickCard(card)}>
                Tell a story {card}
              </button>
            </div> */}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};
