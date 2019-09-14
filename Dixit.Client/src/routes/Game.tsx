import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State, fetchGameAction } from "../store";
import { RouteComponentProps } from "react-router";
import { push } from "connected-react-router";
import classnames from "classnames";
import Axios from "axios";

export const Game: React.FC<RouteComponentProps<{ code: string }>> = props => {
  const [story, setStory] = useState("");
  const name = useSelector((store: State) => store.name);
  const players = useSelector((store: State) => store.players);
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
        Storyteller: {storyTeller}
        <br />
        Name:{name}
        <br />
        Game:sddsdgsdgsdgdsd {props.match.params.code}
        {storyTeller == name && (
          <div>
            <input
              value={story}
              onChange={e => setStory(e.target.value)}
            ></input>
            <button onClick={tellStory}>Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};
