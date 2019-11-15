import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { Apiclient } from "../../api/api";
import "./GameState.scss";

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
    <div>
      <p>
        Storyteller: {story.currentStoryTeller}
        <br /> Story: {story}
      </p>
      {story.currentStoryTeller !== player.name && (
        <div>
          {player.hand.map(card => {
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
