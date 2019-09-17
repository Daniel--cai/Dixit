import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { Apiclient } from "../../api/api";
import "./GameState.scss";

export const VotingState: React.FC<{ code: string }> = props => {
  const revealed = useSelector((store: State) => store.revealed);
  const name = useSelector((store: State) => store.name);
  const voteCard = (card: number) => async () => {
    await Apiclient.voteCard({
      code: props.code,
      card: card,
      player: name
    });
  };

  return (
    <div>
      {revealed.sort().map(card => {
        return (
          <button key={card} onClick={voteCard(card)}>
            {card}
          </button>
        );
      })}
    </div>
  );
};
