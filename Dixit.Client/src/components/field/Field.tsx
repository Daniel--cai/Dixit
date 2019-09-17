import React from "react";
import { State } from "../../store";
import { useSelector } from "react-redux";
export const Field: React.FC = () => {
  const votes = useSelector((store: State) => store.vote);
  const storyCard = useSelector((store: State) => store.storyCard);
  return (
    <>
      {votes.map(vote => (
        <div>
          {vote.card === storyCard && (
            <b>
              {vote.player} - {vote.card}
            </b>
          )}
          {vote.card !== storyCard && (
            <span>
              {vote.player} = {vote.card}
            </span>
          )}
        </div>
      ))}
    </>
  );
};
