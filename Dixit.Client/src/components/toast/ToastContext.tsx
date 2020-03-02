import React, { useState, PropsWithChildren } from "react";
import { ToastProps, Toast } from "./Toast";



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

export const ToastProvider: React.FC = ({
    children
}) => {
    const [toasts, setToasts] = useState<ToastProps[]>([])
    const open = (props: ToastProps) => {
        setToasts([...toasts, props])
    }
    const close = (props: ToastProps) => {
        setToasts([...toasts, props])
    }

    return (
        <ToastContext.Provider value={{ toasts, open, close }}>
            <Toast message="123" duration={1} isOpen={true} />
            {children}
        </ToastContext.Provider>
    )
}