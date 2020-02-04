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

export const VotingStateScreen: React.FC<{}> = props => {
    const player = useSelector((store: State) => store.player);
    const story = useSelector((store: State) => store.story);

    return (
        <div sx={styles.storyScreenStateCss}>
            <Banner sx={{}}>
                <div>
                    <i>"{story.story}"</i>
                </div>
                <div>
                    {
                        story.currentStoryTeller === player.name &&
                        <React.Fragment>Other players are still <b>voting</b></React.Fragment>
                    }
                    {
                        story.currentStoryTeller !== player.name &&
                        <React.Fragment><b>Find the card</b> that belong to {story.currentStoryTeller}</React.Fragment>
                    }
                </div>
            </Banner>
            <div sx={{ display: "grid", gridTemplateColumns: "repeat(3, auto)"}}>
                {story.revealed.sort().map(card => {
                    return (
                        <Card
                            key={card}
                            src={Images[card % 6]}
                        >
                        </Card>
                    );
                })}
            </div>
        </div >
    );
};
