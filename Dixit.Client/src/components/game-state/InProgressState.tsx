import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { Apiclient } from "../../api/api";
import "./GameState.scss";

export const InProgressState: React.FC<{ code: string }> = props => {
  const name = useSelector((store: State) => store.name);
  const hand = useSelector((store: State) => store.hand);

  const story = useSelector((store: State) => store.story);

  const storyTeller = useSelector((store: State) => store.storyTeller);

  const playCard = (card: number) => async () => {
    await Apiclient.playCard({
      code: props.code,
      card: card,
      player: name
    });
  };

  return (
    <div>
      <p>
        Storyteller: {storyTeller}
        <br /> Story: {story}
      </p>
      {storyTeller !== name && (
        <div>
          {hand.map(card => {
            return (
              <button key={card} onClick={playCard(card)}>
                {card}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
