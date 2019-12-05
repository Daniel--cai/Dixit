/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import React, { useState } from "react";
import * as styles from "./Modal.styles";
import { Transition } from "react-transition-group";
import { Button } from "../button";
import { TextArea } from "../textarea";
import { createPortal } from "react-dom";
import Image1 from "../../assets/cards/1.png";

interface Props {
  message: string;
  show: boolean;
  hide: any;
  submit: any;
}

export const InputModal: React.FC<Props> = props => {
  const backgroundImageStyles: SxStyleProp = {
    background: `url(${Image1}) no-repeat`,
    backgroundSize: "cover",
    margin: "4"
  }
  return createPortal(
    <Transition
      appear
      in={props.show}
      timeout={200}
      unmountOnExit
    >
      {state => (
        <div sx={{ ...styles.inputModalCss, ...styles.opacityTransitionCss[state] }} >
          <div sx={styles.inputWrapperCss} >
            <div sx={styles.inputWrapperCaptionCss}>

              <div sx={{ gridColumnStart: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div sx={{ ...styles.inputWrapperImageCss, ...backgroundImageStyles }} />
                <div sx={{ padding: "2", color: "primary" }}> Tell a story</div>
                <div sx={{ padding: "2", color: "gray-50" }}>Something subtle yet creative. If nobody or everybody finds your card, you get 0 points </div>
              </div>
              <div
                sx={{ color: "gray-50", justifySelf: "right", marginLeft: "3", marginRight: "3", cursor: "pointer" }}
                onClick={props.hide}
              >
                <i className="fas fa-times" />
              </div>
            </div>

            <div sx={{
              flex: 1,
              textAlign: "center",
              margin: "3"

            }} >
              <TextArea rows={3} placeholder= "A quick brown fox jumped over the lazy cat"/>
            </div>
            <Button sx={{ margin: "6", alignSelf: "center" }} disabled={true} onClick={props.hide}>Send</Button>
          </div>
        </div >
      )
      }
    </Transition >, document.getElementById("root")!
  )
};
