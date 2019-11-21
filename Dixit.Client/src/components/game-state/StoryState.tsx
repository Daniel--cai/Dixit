/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { Apiclient } from "../../api/api";
import Image1 from "../../assets/cards/1.png";
import "./GameState.scss";
import classnames from "classnames";
import { Modal, InputModal } from "../modal/Modal";
import { Carousel } from "react-responsive-carousel";
import { Banner } from "../banner/Banner";
import { Card } from "../card/Card";
export const StoryState: React.FC<{ code: string }> = props => {
  const [storyInput, setStoryInput] = useState("");
  const [card, setCard] = useState(2);
  const player = useSelector((store: State) => store.player);
  const story = useSelector((store: State) => store.story);
  const storyTeller = story.currentStoryTeller;
  const disabled = storyInput === "";
  const [showModal, setShowModel] = useState(false);

  const pickCard = (card: number) => async () => {
    setShowModel(true);
  };

  const hideModal = () => {
    setShowModel(false);
  };

  const tellStory = (card: number) => async () => {
    await Apiclient.tellStory({
      code: props.code,
      story: storyInput,
      card: card,
      storyTeller: player.name
    });
  };

  const changeIndex = (index: number, item: React.ReactNode) => {
    setCard(index);
  };

  return (
    <React.Fragment>
      <InputModal
        show={showModal}
        message={"...and tell a story"}
        submit={1}
        hide={hideModal}
      />

      <Banner sx={{display: ["none", "block","block"]}}>1234</Banner>
      <div sx={{ width: ["100%", "85%", "30rem"], margin: "auto" }}>
        {storyTeller !== player.name && (
          <p> {storyTeller} is currently telling a story</p>
        )}
        {storyTeller === player.name && (
          <React.Fragment>
            <div sx={{
              display: "flex",
              padding: "2",
              flexWrap: "wrap",
              ">:nth-child(n+3)": {
                paddingTop: "2",
              },
              ">:nth-child(even)": {
                paddingLeft: "1",
              },
              ">:nth-child(odd)": {
                paddingRight: "1",
              }
            }}>
              {player.hand.map(card => {
                return (
                  <Card>
                    <img
                      sx={{
                        width: "100%",
                        height: "100%",
                        userSelect: "none",
                        boxShadow: "deep",
                        borderRadius: "4px",
                      }}
                      src={Image1}
                      alt={`image-${card}`}
                      onClick={pickCard(card)}
                    />
                  </Card>
                );
              })}
            </div>
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
