import React, { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import "./Modal.scss";
import Image1 from "../../assets/cards/1.png";
import { CSSTransition } from "react-transition-group";

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
  if (!props.show) return <></>;
  return (
    <CSSTransition
      in={props.show}
      timeout={500}
      classNames="input-modal"
      unmountOnExit
    >
      <div className="modal">
        <CSSTransition
          in={show}
          timeout={250}
          classNames="input-modal"
          unmountOnExit
        >
          <InputModal hide={hide} show={show} message={""} submit={""} />
        </CSSTransition>
        <div className="modal__content__card">
          <img src={Image1}></img>
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
  // if (!props.show) return <></>;
  return (
    <div className="input__modal">
      <div className="input__wrapper">
        <div className="input__modal__caption">
          <div></div>
          <div>Tell a story</div>
          <div>
            <button onClick={props.hide}>Ok</button>
          </div>
        </div>
        <textarea className="input" placeholder="...tell a story" rows={10} />
      </div>
    </div>
  );
};
