/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import React, { useState, useRef, useEffect, RefObject } from "react";
import * as styles from "./Modal.styles";
import { Transition } from "react-transition-group";
import { Button } from "../button";
import { TextArea } from "../textarea";
import { createPortal } from "react-dom";
import { Images } from "../card-images";

interface Props {
  message: string;
  show: boolean;
  hide: any;
  submit: () => void;
  story: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const InputModal: React.FC<Props> = props => {
  const backgroundImageStyles: SxStyleProp = {
    background: `url(${Images[1 % 6]}) no-repeat`,
    backgroundSize: "cover",
    margin: "md"
  }

  const  handleClick = () => {
    props.submit();
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
                <div sx={{ padding: "sm", color: "primary" }}> Tell a story</div>
                <div sx={{ padding: "sm", color: "gray-50" }}>Something subtle yet creative. If nobody or everybody finds your card, you get 0 points </div>
              </div>
              <div
                sx={{
                  color: "gray-50",
                  justifySelf: "right",
                  marginLeft: "sm",
                  marginRight: "sm",
                }}
              >
                <i onClick={props.hide} sx={{ cursor: "pointer" }} className="fas fa-times" />
              </div>
            </div>

            <div sx={{
              flex: 1,
              textAlign: "center",

            }} >
              <TextArea rows={3} placeholder="A quick brown fox jumped over the lazy cat" value={props.story} onChange={props.onChange} />
            </div>
            <Button sx={{ margin: "md", alignSelf: "center" }} onClick={handleClick}>Send</Button>
          </div>
        </div >
      )
      }
    </Transition >, document.getElementById("root")!
  )
};
