import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { Apiclient } from "../../api/api";
import "./GameState.scss";

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
    <div>
      {story.revealed.sort().map(card => {
        return (
          <button key={card} onClick={voteCard(card)}>
            {card}
          </button>
        );
      })}
    </div>
  );
};
