import React, { useState } from "react";
import { ToastProps } from "./Toast";



export interface ToastContextType {
    toasts: any[]
    open: Function;
    close: Function;
}
export const ToastContext = React.createContext<ToastContextType>({
    toasts: [],
    open: () => { },
    close: () => { }
})

export const ToastConsumer = ToastContext.Consumer;

export const ToastProvider = ({
    children
}) => {
    const [toasts, addToasts] = useState<ToastProps[]>([])
    const open = (props: ToastProps) => {
        setToasts([...toasts, props])
    }
    const close = (props: ToastProps) => {
        setToasts([...toasts, props])
    }

    return (
        <ToastContext.Provider value={{ toasts, open, close }}>
            {children}
        </ToastContext.Provider>
    )
}