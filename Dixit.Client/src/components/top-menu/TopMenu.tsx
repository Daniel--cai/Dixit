import React, { useState } from "react";
import "./TopMenu.scss";
import Logo from "../../assets/images/logo.png";
import classnames from "classnames";

export const TopMenu: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="menu-container">
      <nav>
        <a href="/" className="logo">
          <img className="menu-container__logo" src={Logo}></img>
        </a>
        <input type="checkbox" id="menu-toggle" />
        {/* <label htmlFor="menu-toggle" className="burger-menu">
          <div
            className={toggle ? "menu-icon menu-icon--active" : "menu-icon"}
            onClick={() => setToggle(!toggle)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label> */}
        <div className="left-menu">
          <a href="/">
            <span>Rules</span>
          </a>
          <a href="/">
            <span>History</span>
          </a>
          <a href="/">
            <span>Leave</span>
          </a>
        </div>
      </nav>
    </div>
  );
};
