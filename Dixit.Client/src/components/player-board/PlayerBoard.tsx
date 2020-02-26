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

interface PlayerBoardColumn {
  name: string;
  score: number;
  status: Status;
  storyTeller: boolean;
}

export const PlayerBoard: React.FC = () => {
  const game = useSelector((store: State) => store.game);
  const story = useSelector((store: State) => store.story);
  const votes = useSelector((store: State) => store.story.votes);
  console.log(game.score);
  const data = game.score.map(scorer => ({ name: scorer.name, score: scorer.score, status: votes.find(vote => vote.player === scorer.name) ? 'loading' : 'neutral' }))

  const renderPlayerBlock = (value: PlayerBoardColumn) => {
    return <Flex sx={{ alignItems: 'center' }}>
      <PlayerIndicatorIcon size='sm' status={value.status} />
      <div sx={{ mx: 'sm' }}>{value.name}</div>
      <Lozenge>Storyteller</Lozenge>
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
    <div sx={styles.playerBoardCss}>
      <Table columns={columns} data={data}></Table>
    </div>
  );
};
