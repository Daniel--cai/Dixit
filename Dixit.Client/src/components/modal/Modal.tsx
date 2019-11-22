/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import * as styles from "./Modal.styles";
import Image1 from "../../assets/cards/1.png";
import { Transition } from "react-transition-group";
import { Button } from "../button";
import { TextArea } from "../textarea";
import { Spacing } from "../spacing";
import { createPortal } from "react-dom";
import { useScrollLock } from "../../hooks/useScrollLock";
interface Props {
  message: string;
  show: boolean;
  hide: any;
  submit: any;
}

// export const Modal: React.FC<Props> = props => {
//   const [show, setShow] = useState(false);
//   const hide = () => {
//     setShow(false);
//   };
//   return (

//     <div
//       sx={{
//         ...styles.modalCss,
//         ...styles.opacityTransitionCss[state]
//       }} className={state}>
//       <InputModal hide={hide} show={show} message={""} submit={""} />
//       <div sx={styles.modalContentCss}>
//         <img src={Image1} onClick={() => props.hide()}></img>
//       </div>
//       <button
//         className=" modal__button__edit button button--round"
//         onClick={() => setShow(true)}
//       >
//         <i className="fas fa-pen-nib" />
//       </button>
//     </div>
//       }
//     </Transition >
//   );
// };

export const InputModal: React.FC<Props> = props => {
  useScrollLock(props.show);
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
              <div>Tell a story</div>
              <div
                sx={{ color: "gray-50", justifySelf: "right", marginLeft: "3", marginRight: "3", cursor: "pointer" }}
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
              <TextArea placeholder="...tell a story" rows={3} />
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
