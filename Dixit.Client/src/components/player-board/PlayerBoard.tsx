import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import "./PlayerBoard.scss";

export const PlayerBoard: React.FC = () => {
  const game = useSelector((store: State) => store.game);
  console.log(game.score);
  return (
    <div className="score-board">
      {game.score.map(score => (
        <div className="score-board__line" key={score.name}>
          {score.name}: {score.score} (+{score.scored})
        </div>
      ))}
    </div>
  );
};
