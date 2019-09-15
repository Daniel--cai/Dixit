import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State, fetchGameAction } from "../store";
import { RouteComponentProps } from "react-router";
import { push } from "connected-react-router";
import classnames from "classnames";
import Axios from "axios";
import { GameState } from "../constants/GameState";

export const Game: React.FC<RouteComponentProps<{ code: string }>> = props => {
  const [story, setStory] = useState("");
  const name = useSelector((store: State) => store.name);
  const hand = useSelector((store: State) => store.hand);
  const players = useSelector((store: State) => store.players);
  const gameState = useSelector((store: State) => store.gameState);

  const storyTeller = useSelector((store: State) => store.storyTeller);
  const connected = useSelector((store: State) => store.connected);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!connected) {
      dispatch(push("/"));
    } else {
      dispatch(fetchGameAction(props.match.params.code));
    }
  }, []);

  const tellStory = () => {
    Axios.post("/api/player/tellstory", {
      code: props.match.params.code,
      storyTeller: name,
      story,
      card: 1
    });
  };

  const fontWeight = storyTeller == name ? "bold" : "normal";
  return (
    <div>
      <div>
        {players.map(player => (
          <p style={{ fontWeight: fontWeight }} key={player}>
            {player}
          </p>
        ))}
        State: {gameState}
        <br />
        Storyteller: {storyTeller}
        <br />
        Name:{name}
        <br />
        Game:sddsdgsdgsdgdsd {props.match.params.code}
        {gameState == GameState.Story && storyTeller == name && (
          <div>
            <input
              value={story}
              onChange={e => setStory(e.target.value)}
            ></input>
            <button onClick={tellStory}>Submit</button>
          </div>
        )}
        {gameState == GameState.InProgress && (
          <div>
            {}
            <button onClick={tellStory}>1</button>
            <button onClick={tellStory}>2</button>
            <button onClick={tellStory}>3</button>
            <button onClick={tellStory}>1</button>
          </div>
        )}
      </div>
    </div>
  );
};
