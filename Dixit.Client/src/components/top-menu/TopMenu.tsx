import React from "react";
import "./TopMenu.scss";
export const TopMenu: React.FC = () => {
  return (
    <div className="menu-container">
      <nav>
        <a href="/" className="logo">
          DIXIT
        </a>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="burger-menu">
          <div className="burger-menu__line" />
          <div className="burger-menu__line" />
          <div className="burger-menu__line" />
        </label>
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
