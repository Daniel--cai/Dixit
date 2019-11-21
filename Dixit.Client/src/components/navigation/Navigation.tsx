/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import * as styles from "./Navigation.styles";

interface NavigationProps {

}

export const Navigation: React.FC<NavigationProps> = (props) => {
  const [toggle, setToggle] = useState(false);
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
        <i className="fas fa-bars" sx={{ fontSize: 5, padding: 5, color:"white" }} />
      </nav>

    </div>
  );
};
