import { ToastContext, ToastContextType } from "./ToastContext";
import { useContext } from "react";
export const useToast = () => {
    const { toasts, open, close } = useContext<ToastContextType>(ToastContext);
    return { toasts, addToast: open }
}