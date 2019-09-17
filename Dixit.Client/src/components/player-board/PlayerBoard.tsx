import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import "./PlayerBoard.scss";

export const PlayerBoard: React.FC = () => {
  const scores = useSelector((store: State) => store.score);
  console.log(scores);
  return (
    <div className="score-board">
      {scores.map(score => (
        <div className="score-board__line" key={score.name}>
          {score.name}: {score.score} (+{score.scored})
        </div>
      ))}
    </div>
  );
};
