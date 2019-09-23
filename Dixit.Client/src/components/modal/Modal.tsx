import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import "./Modal.scss";
import Image1 from "../../assets/cards/1.png";

interface Props {
  message: string;
  show: boolean;
  hide: any;
  submit: any;
}

export const Modal: React.FC<Props> = props => {
  if (!props.show) return <></>;
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__content__message">{props.message}</div>
        <img className="modal__content__card" src={Image1}></img>
        <div className="input__wrapper">
          <input className="input" placeholder="your story" />
        </div>
        <div className="button-group">
          <button
            onClick={() => props.hide()}
            className="button button--secondary"
          >
            Back
          </button>
          <button className="button">okay</button>
        </div>
      </div>
    </div>
  );
};
