import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State, fetchGameAction } from "../store";
import { RouteComponentProps } from "react-router";
import { push } from "connected-react-router";
import classnames from "classnames";
import { GameState } from "../constants/GameState";
import { Apiclient } from "../api/api";

export const Game: React.FC<RouteComponentProps<{ code: string }>> = props => {
  const [storyInput, setStoryInput] = useState("");
  const name = useSelector((store: State) => store.name);
  const hand = useSelector((store: State) => store.hand);
  const revealed = useSelector((store: State) => store.revealed);
  const scores = useSelector((store: State) => store.score);
  const votes = useSelector((store: State) => store.vote);
  const storyCard = useSelector((store: State) => store.storyCard);

  const players = useSelector((store: State) => store.players);
  const gameState = useSelector((store: State) => store.gameState);
  const story = useSelector((store: State) => store.story);

  const storyTeller = useSelector((store: State) => store.storyTeller);
  const connected = useSelector((store: State) => store.connected);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!connected) {
      dispatch(push("/"));
    }
  }, []);

  const tellStory = (card: number) => async () => {
    await Apiclient.tellStory({
      code: props.match.params.code,
      story: storyInput,
      card: card,
      storyTeller: name
    });
  };
  const voteCard = (card: number) => async () => {
    await Apiclient.voteCard({
      code: props.match.params.code,
      card: card,
      player: name
    });
  };

  const playCard = (card: number) => async () => {
    await Apiclient.playCard({
      code: props.match.params.code,
      card: card,
      player: name
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
        <p>State: {gameState}</p>
        {gameState == GameState.InProgress ||
          (gameState == GameState.Voting && <p>Story: {story}</p>)}
        <br />
        Name:{name}
        <br />
        {gameState == GameState.Story && storyTeller == name && (
          <div>
            <input
              value={storyInput}
              onChange={e => setStoryInput(e.target.value)}
            ></input>
          </div>
        )}
        {votes.map(vote => (
          <div>
            {vote.card == storyCard && (
              <b>
                {vote.card} - {vote.player}
              </b>
            )}
            {vote.card != storyCard && (
              <span>
                {vote.card} - {vote.player}
              </span>
            )}
          </div>
        ))}
        {scores.map(score => (
          <div>
            {score.name}: {score.score} (+{score.scored})
          </div>
        ))}
        {gameState == GameState.Story && storyTeller == name && (
          <div>
            {hand.map(card => {
              return (
                <button key={card} onClick={tellStory(card)}>
                  {card}
                </button>
              );
            })}
          </div>
        )}
        {gameState == GameState.Voting && (
          <div>
            {revealed.sort().map(card => {
              return (
                <button key={card} onClick={voteCard(card)}>
                  {card}
                </button>
              );
            })}
          </div>
        )}
        {gameState == GameState.InProgress && (
          <p>
            Storyteller: {storyTeller}
            <br /> Story: {story}
          </p>
        )}
        {gameState == GameState.InProgress && storyTeller != name && (
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
    </div>
  );
};
