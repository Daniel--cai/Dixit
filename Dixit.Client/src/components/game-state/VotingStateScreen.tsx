/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { Apiclient } from "../../api/api";
import { Card } from "../card/Card";
import { Banner } from "../banner/Banner";
import * as styles from "./GameState.styles";
import { Images } from "../card-images";
import { Grid } from "../../components/grid";
import { Player } from "../player-indicator/PlayerIndicator";
import { ToastProvider } from "../toast/ToastContext";
export const VotingStateScreen: React.FC<{}> = props => {
    const player = useSelector((store: State) => store.player);
    const story = useSelector((store: State) => store.story);
    const players = useSelector((store: State) => store.game.players);
    const votes = useSelector((store: State) => store.story.votes);

    const playerIndicators: Player[] = players.map(player => ({ name: player.name, status: (votes.find(vote => vote.player == player.name) ? 'neutral' : 'loading') }))

    return (
        <ToastProvider>
            <div sx={styles.storyScreenStateCss}>
                <Banner sx={{}}>
                    <div sx={{ variant: 'text.label' }}>
                        <b>"{story.story}"</b>
                    </div>
                    <div>
                        {
                            story.currentStoryTeller === player.name &&
                            <React.Fragment>Other players are still <b>voting</b></React.Fragment>
                        }
                        {/* {
                    story.currentStoryTeller !== player.name &&
                    <React.Fragment><b>Find the card</b> that belong to {story.currentStoryTeller}</React.Fragment>
                } */}
                    </div>
                </Banner>
                {/* <PlayerIndicator players={playerIndicators} /> */}
                <Grid>
                    {story.revealed.sort().map(card => {
                        return (
                            <Card
                                key={card}
                                src={Images[card % 6]}
                            />
                        );
                    })}
                </Grid>

            </div >
        </ToastProvider>
    );
};
