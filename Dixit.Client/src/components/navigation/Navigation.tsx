/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import { Overlay } from "../overlay/Overlay"
import * as styles from "./Navigation.styles";
import { Transition } from "react-transition-group";
import { useScrollLock } from "../../hooks/useScrollLock";

export const Navigation: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  useScrollLock(toggle);

  return (
    <div sx={{ width: "100%" }}>
      <nav sx={styles.navigationCss}>
        <a href="/" sx={styles.navigationLogoCss}>
          <img sx={{ width: "100px" }} src={Logo}></img>
        </a>
        <div sx={styles.leftMenuCss}>
          <a href="/" >
            <span>Rules</span>
          </a>
          <a href="/" >
            <span>History</span>
          </a>
          <a href="/" >
            <span>Leave</span>
          </a>
        </div>
      </nav>

      <nav sx={styles.navigationMobileCss}>
        <i className="fas fa-bars" sx={{ fontSize: 3, padding: "4", color: "white" }} onClick={() => setToggle(true)} />
      </nav>

      <Transition appear in={toggle} timeout={200} unmountOnExit>
        {state => (
          <div sx={{
            ...styles.accordionCss,
            ...styles.slideInRightTransitionCss[state],
          }}>
            <div sx={styles.navigationLinkMobileCss}>
              <a href="/">
                <span>Rules</span>
              </a>
              <a href="/" >
                <span>History</span>
              </a>
              <a href="/">
                <span>Leave</span>
              </a>
            </div>
          </div>
        )}

      </Transition>
      <Transition appear in={toggle} timeout={200} unmountOnExit>
        {state => (
          <Overlay sx={{
            ...styles.overlayTransitionCss,
            ...styles.opacityTransitionCss[state],
          }} onClick={() => setToggle(false)} />
        )}
      </Transition>

    </div >
  );
};
