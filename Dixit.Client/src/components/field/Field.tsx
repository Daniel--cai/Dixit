import React from "react";
import { State } from "../../store";
import { useSelector } from "react-redux";
export const Field: React.FC = () => {
  const story = useSelector((store: State) => store.story);
  return (
    <>
      {story.votes.map(vote => (
        <div>
          {vote.card === story.storyCard && (
            <b>
              {vote.player} - {vote.card}
            </b>
          )}
          {vote.card !== story.storyCard && (
            <span>
              {vote.player} = {vote.card}
            </span>
          )}
        </div>
      ))}
    </>
  );
};
