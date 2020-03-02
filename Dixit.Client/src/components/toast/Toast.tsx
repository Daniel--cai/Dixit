/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect, ReactDOM } from "react";
import { createPortal } from "react-dom";
import { Transition } from "react-transition-group";
import * as styles from "./Toast.styles";

export interface ToastProps {
    message: string
    duration: number;
    isOpen: boolean;
}



export const Toast: React.FC<ToastProps> = ({ message, isOpen, duration }) => {
    const [openState, setOpenState] = useState(false);
    let timer: ReturnType<typeof setTimeout>
    useEffect(() => {
        setOpenState(isOpen)
    }, [isOpen])

    const handleClose = () => {
        clearTimer();
        setOpenState(false);
    }

    const clearTimer = () => {
        clearTimeout(timer);
    }
    
    return (
        createPortal(
            <Transition appear in={openState} timeout={300} unmountOnExit>
                {state =>
                    <div sx={{ ...styles.toastCss, ...styles.opacityTransitionCss[state] }}>hello</div>
                }
            </Transition>, document.body)
    )
}