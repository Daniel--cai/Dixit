/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import React, { ReactElement } from "react";
import { Spring } from "react-spring/renderprops";
import * as styles from "./Grid.styles";

interface GridProp {
  animate?: boolean;
  animationDelay?: number;
  fanned?: boolean;
  sx?: SxStyleProp;
}

export const Grid: React.FC<GridProp> = ({
  children,
  animate = true,
  animationDelay = 150,
  fanned = true,
  ...rest
}) => {
  return (
    <div sx={styles.gridCss(true)} {...rest}>
      {React.Children.map<React.ReactNode, React.ReactNode>(
        children,
        (child: React.PropsWithChildren<any>, i) => {
          return (
            <Spring
              delay={animationDelay * i}
              from={{
                opacity: 0,
              }}
              to={{
                opacity: 1,
              }}
            >
              {(style) => React.cloneElement(child, { style })}
            </Spring>
          );
        }
      )}
    </div>
  );
};
