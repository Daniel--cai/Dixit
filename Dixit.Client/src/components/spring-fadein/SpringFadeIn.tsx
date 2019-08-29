import React from "react";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

export const SpringFadeIn = (renderProps: any) => {
  const [active, setActive] = useState(true);
  const onChange = (isVisible: boolean) => {
    if (isVisible) setActive(false);
  };
  return (
    <VisibilitySensor active={active} onChange={onChange}>
      {props => (
        <Spring
          delay={1}
          to={{
            opacity: props.isVisible ? 1 : 0,
            transform: props.isVisible ? "translateY(0)" : "translateY(40px)"
          }}
        >
          {props => <div style={props}>{renderProps.children}</div>}
        </Spring>
      )}
    </VisibilitySensor>
  );
};
