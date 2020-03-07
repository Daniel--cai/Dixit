/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { Card } from "../card/Card";
import { Banner } from "../banner/Banner";
import * as styles from "./GameState.styles";
import { Images } from "../card-images";
import { Grid } from "../grid";
import { useToast } from "../toast";
export const StoryStateScreen: React.FC<{}> = props => {
    const player = useSelector((store: State) => store.player);
    const story = useSelector((store: State) => store.story);
    const players = useSelector((store: State) => store.game.players);
    const votes = useSelector((store: State) => store.story.votes);

    const { addToast } = useToast();
    useEffect(()=> {
        addToast({
            message:`It is ${story.currentStoryTeller}'s turn to tell a story`,
            duration: 1000
        })
    },[])
    return (
        <div sx={styles.storyScreenStateCss}>
            <Banner sx={{}}>
                <div sx={{ variant: 'text.label' }}>
                    <b>{story.currentStoryTeller} is currently telling a story</b>
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
                {Array(6).fill(0).map(card => {
                    return (
                        <Card
                            key={card}
                            src={Images[card % 6]}
                        />
                    );
                })}
            </Grid>

        </div >
    );
};
