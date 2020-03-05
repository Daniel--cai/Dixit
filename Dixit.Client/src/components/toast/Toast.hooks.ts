import { ToastContext, ToastContextType } from "./ToastContext";
import { useContext } from "react";
import { ToastProps } from "./Toast";
import { string } from "../segment";
import uuid from "uuid";

export interface AddToastProps {
    message: string;
    duration: number
}

export const useToast = () => {
    const { toasts, open, close } = useContext<ToastContextType>(ToastContext);
    const addToast = (props: AddToastProps) => {
        const toast: ToastProps = {
            message: props.message,
            duration: props.duration,
            close: close,
            id:  uuid.v1(),
            isOpen: false,
            isExpired: false
        }
        open(toast);
    }
    return { toasts, addToast: addToast }
}