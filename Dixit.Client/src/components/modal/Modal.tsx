/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import * as styles from "./Modal.styles";
import { Transition } from "react-transition-group";
import { Button } from "../button";
import { TextArea } from "../textarea";
import { createPortal } from "react-dom";
interface Props {
  message: string;
  show: boolean;
  hide: any;
  submit: any;
}

export const InputModal: React.FC<Props> = props => {
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
              <div />
              <div>
                Tell a story
                <div>Something subtle yet creative</div>
                </div>
              <div
                sx={{ color: "white", justifySelf: "right", marginLeft: "3", marginRight: "3", cursor: "pointer" }}
                onClick={props.hide}
              >
                <i className="fas fa-times" />
              </div>
            </div>

            <div sx={{
              flex: 1,
              padding: "2",
              textAlign: "center"
            }} >
              <TextArea rows={3} />
            </div>
            {/* <div sx={{ ">:nth-child(n)": { margin: "5px" }, ">:last-child": { marginLeft: 0 } }}> */}

            <Button sx={{ margin: "2", alignSelf: "center" }} onClick={props.hide}>Send</Button>

            {/* </div> */}
          </div>
        </div >
      )
      }
    </Transition >, document.getElementById("root")!
  )
};
