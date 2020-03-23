/** @jsx jsx */
import { jsx, SxStyleProp, Flex } from "theme-ui";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import * as styles from "./PlayerBoard.styles";
import { Banner } from "../banner/Banner";
import { Table, TableColumnDefinition } from "../table";
import { PlayerIndicatorIcon, Status } from "../player-indicator";
import { Lozenge } from "../lozenge";
import { GameState } from "../../store/game/models";

interface PlayerBoardColumn {
  name: string;
  score: number;
  status: Status;
  storyTeller: boolean;
}

interface PlayerBoardProps {
  sx?: SxStyleProp
}

export const PlayerBoard: React.FC<PlayerBoardProps> = ({ sx = {} }) => {
  const game = useSelector((store: State) => store.game);
  const story = useSelector((store: State) => store.story);
  const votes = useSelector((store: State) => store.story.votes);

  const getStatus = (name: string): Status => {
    switch (game.gameState) {
      case GameState.Story:
        return story.currentStoryTeller === name ? 'loading' : 'neutral'
      case GameState.Voting:
        if (story.currentStoryTeller === name) return 'done';
        return votes.find(vote => vote.player === name) ? 'done' : 'neutral';
      default:
        return 'neutral'
    }
  }

  const data = game.players.map(scorer => ({
    name: scorer.name,
    score: scorer.score,
    status: getStatus(scorer.name),
    storyTeller: story.currentStoryTeller === scorer.name
  }))


  const renderPlayerBlock = (value: PlayerBoardColumn) => {
    return <Flex sx={{ alignItems: 'center' }}>
      <PlayerIndicatorIcon size='sm' status={value.status} />
      <div sx={{ mx: 'sm' }}>{value.name}</div>
      {value.storyTeller &&
        <Lozenge>Storyteller</Lozenge>
      }
    </Flex>
  }

  const columns: TableColumnDefinition<PlayerBoardColumn>[] = [
    {
      header: 'Name',
      propertyName: 'name',
      renderProp: (value) => renderPlayerBlock(value)
    },
    {
      header: 'Score',
      propertyName: 'score',
      renderProp: (value) => <div sx={{ textAlign: 'center' }}>{value.score}</div>
    }
  ]
  return (
    <div sx={{ ...sx, ...styles.playerBoardCss }}>
      <Table columns={columns} data={data}></Table>
    </div>
  );
};
