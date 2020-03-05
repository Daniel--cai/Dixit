/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect, ReactDOM } from "react";
import { createPortal } from "react-dom";
import { Transition } from "react-transition-group";
import * as styles from "./Toast.styles";



export interface ToastProps {
    message: string
    duration: number;
    close: (id: string) => void;
    id: string;
    isOpen: boolean;
    isExpired: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, isOpen }) => {

    return (
        createPortal(
            <Transition
                appear
                in={isOpen}
                timeout={200}
                unmountOnExit
            >
                {state =>
                    <div sx={{ ...styles.toastCss, ...styles.opacityTransitionCss[state] }}>{message}</div>
                }
            </Transition>, document.getElementById("root")!)
    )
}