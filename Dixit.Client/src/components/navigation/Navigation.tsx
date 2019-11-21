/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import { Overlay } from "../overlay/Overlay"
import * as styles from "./Navigation.styles";
import "./Navigation.scss";
import { CSSTransition } from "react-transition-group";


export const Navigation: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'relative'
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset'
    }
  }, [toggle])

  return (
    <div sx={{ width: "100%" }}>
      <nav sx={styles.navigationCss}>
        <a href="/" sx={styles.navigationLogoCss}>
          <img sx={{ width: "100px" }} src={Logo}></img>
        </a>
        <div sx={styles.leftMenuCss}>
          <a href="/" sx={styles.leftMenuLinkCss}>
            <span>Rules</span>
          </a>
          <a href="/" sx={styles.leftMenuLinkCss}>
            <span>History</span>
          </a>
          <a href="/" sx={styles.leftMenuLinkCss}>
            <span>Leave</span>
          </a>
        </div>
      </nav>

      <nav sx={styles.navigationMobileCss}>
        <i className="fas fa-bars" sx={{ fontSize: 3, padding: "4", color: "white" }} onClick={() => setToggle(true)} />
      </nav>


      <CSSTransition in={toggle} timeout={200} classNames="accordion" unmountOnExit>
        <div sx={{
          position: "fixed",
          top: "0",
          width: "15rem",
          zIndex: "501",
          height: "100%",
          left: "0",
          overflow: "hidden",
          backgroundColor: "white",
          shadow: "layer"
        }}>
          hef
          </div>
      </CSSTransition>
      <CSSTransition in={toggle} timeout={200} classNames="overlay" unmountOnExit>
        <Overlay onClick={() => setToggle(false)} />
      </CSSTransition>


    </div >
  );
};
