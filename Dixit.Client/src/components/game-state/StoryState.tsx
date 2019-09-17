import React, { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { Apiclient } from "../../api/api";
import Image1 from "../../assets/cards/1.png";
import "./GameState.scss";
import classnames from "classnames";

export const StoryState: React.FC<{ code: string }> = props => {
  const [storyInput, setStoryInput] = useState("");
  const name = useSelector((store: State) => store.name);
  const hand = useSelector((store: State) => store.hand);
  const storyTeller = useSelector((store: State) => store.storyTeller);
  const disabled = storyInput === "";
  const tellStory = (card: number) => async () => {
    await Apiclient.tellStory({
      code: props.code,
      story: storyInput,
      card: card,
      storyTeller: name
    });
  };

  return (
    <div>
      <div>
        {storyTeller !== name && (
          <p> {storyTeller} is currently telling a story</p>
        )}
        {storyTeller === name && (
          <>
            <div className="action__text">Tell a story</div>
            <div className="enter-story">
              <input
                className="enter-story__input"
                value={storyInput}
                onChange={e => setStoryInput(e.target.value)}
              />
            </div>
            <div className="hand">
              {hand.map(card => {
                return (
                  <div
                    className={classnames("hand__card", {
                      "hand__card--disabled": disabled
                    })}
                    key={card}
                    onClick={tellStory(card)}
                  >
                    <img
                      className="hand__card__image"
                      src={Image1}
                      alt={`image-${card}`}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
