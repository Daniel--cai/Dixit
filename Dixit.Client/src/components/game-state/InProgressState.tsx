/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { Apiclient } from "../../api/api";
import { Card } from "../card/Card";
import { Banner } from "../banner/Banner";
import Image1 from "../../assets/cards/1.png";

export const InProgressState: React.FC<{ code: string }> = props => {
  const player = useSelector((store: State) => store.player);
  const story = useSelector((store: State) => store.story);

  const playCard = (card: number) => async () => {
    await Apiclient.playCard({
      code: props.code,
      card: card,
      player: player.name
    });
  };

  return (
    <React.Fragment>
      <Banner sx={{ width: ["100%", "100%", "30rem"], marginLeft: "auto", marginRight: "auto" }}>
        <div>
          <i>"{story.story}"</i>
        </div>
        <div>
          {
            story.currentStoryTeller !== player.name &&
            <React.Fragment>Other players are still <b>deciding</b></React.Fragment>
          }
          {
            story.currentStoryTeller === player.name &&
            <React.Fragment><b>Pick a card</b> that best matches {story.currentStoryTeller}'s story</React.Fragment>
          }

        </div>
      </Banner>
      <div sx={{ width: ["100%", "100%", "30rem"], margin: "auto" }}>
        <div sx={{
          display: "flex",
          padding: "2",
          flexWrap: "wrap",
          ">:nth-child(n+3)": {
            paddingTop: "2",
          },
          ">:nth-child(even)": {
            paddingLeft: "1",
          },
          ">:nth-child(odd)": {
            paddingRight: "1",
          }
        }}>
          {story.revealed.sort().map(card => {
            return (
              <Card>
                <img
                  sx={{
                    width: "100%",
                    height: "100%",
                    userSelect: "none",
                    boxShadow: "deep",
                    borderRadius: "soft",
                  }}
                  src={Image1}
                  alt={`${card}`}
                  onClick={playCard(card)}
                />
              </Card>
            );
          })}
        </div>
      </div>

    </React.Fragment>
  );
};
