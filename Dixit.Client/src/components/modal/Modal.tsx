/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import * as styles from "./Modal.styles";
import Image1 from "../../assets/cards/1.png";
import { CSSTransition } from "react-transition-group";
import { Button } from "../button";
import { TextArea } from "../textarea";
import { Spacing } from "../spacing";

interface Props {
  message: string;
  show: boolean;
  hide: any;
  submit: any;
}

export const Modal: React.FC<Props> = props => {
  const [show, setShow] = useState(false);
  const hide = () => {
    setShow(false);
  };
  if (!props.show) return <React.Fragment></React.Fragment>;
  return (
    <CSSTransition
      in={props.show}
      timeout={500}
      classNames="input-modal"
      unmountOnExit
    >
      <div sx={styles.modalCss}>
        <CSSTransition
          in={show}
          timeout={250}
          classNames="input-modal"
          unmountOnExit
        >
          <InputModal hide={hide} show={show} message={""} submit={""} />
        </CSSTransition>
        <div sx={styles.modalContentCss}>
          <img src={Image1} onClick={() => props.hide()}></img>
        </div>

        <button
          className=" modal__button__edit button button--round"
          onClick={() => setShow(true)}
        >
          <i className="fas fa-pen-nib" />
        </button>
      </div>
    </CSSTransition>
  );
};

export const InputModal: React.FC<Props> = props => {
  if (!props.show) return <React.Fragment></React.Fragment>;
  return (
    <div sx={styles.inputModalCss} >
      <div sx={styles.inputWrapperCss} >
        <div sx={styles.inputWrapperCaptionCss}>
          <div />
          <div>Tell a story</div>
          <div
            sx={{ justifySelf: "right", marginLeft: "3", marginRight: "3", cursor: "pointer" }}
            onClick={props.hide}
          >
            <i className="fas fa-times" />
          </div>

        </div>
        <Spacing size="default">
          <TextArea placeholder="...tell a story" rows={10} />
        </Spacing>
        <Spacing size="small">
          {/* <div sx={{ ">:nth-child(n)": { margin: "5px" }, ">:last-child": { marginLeft: 0 } }}> */}
          <Button onClick={props.hide}>Send</Button>
          {/* </div> */}
        </Spacing >
      </div>
    </div >
  );
};
