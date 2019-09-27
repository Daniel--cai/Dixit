import React, { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { Apiclient } from "../../api/api";
import Image1 from "../../assets/cards/1.png";
import "./GameState.scss";
import classnames from "classnames";
import { Modal } from "../modal/Modal";
import { Carousel } from "react-responsive-carousel";
import { Breakpoint, BreakpointProvider } from "react-socks";
export const StoryState: React.FC<{ code: string }> = props => {
  const [storyInput, setStoryInput] = useState("");
  const name = useSelector((store: State) => store.name);
  const hand = useSelector((store: State) => store.hand);
  const storyTeller = useSelector((store: State) => store.storyTeller);
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
      storyTeller: name
    });
  };

  return (
    <>
      <Modal
        show={showModal}
        message={"...and tell a story"}
        submit={1}
        hide={hideModal}
      />
      <div className="game-state game-state--blurred">
        {storyTeller !== name && (
          <p> {storyTeller} is currently telling a story</p>
        )}
        {storyTeller === name && (
          <>
            <Breakpoint small down>
              <div className="carousel__wrapper">
                <Carousel showThumbs={false} showStatus={false}>
                  {hand.map(card => {
                    return (
                      <img
                        className="hand__card__image card__image"
                        src={Image1}
                        alt={`image-${card}`}
                      />
                      // </div>
                    );
                  })}
                </Carousel>
              </div>
            </Breakpoint>
            <Breakpoint medium up>
              <div className="hand">
                {hand.map(card => {
                  return (
                    <div
                      className="hand__card"
                      key={card}
                      onClick={pickCard(card)}
                    >
                      <img
                        className="hand__card__image card__image"
                        src={Image1}
                        alt={`image-${card}`}
                      />
                    </div>
                  );
                })}
              </div>
            </Breakpoint>
            <div className="action">
              <button className="button">Tell a story</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
