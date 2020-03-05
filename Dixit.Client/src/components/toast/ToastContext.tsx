import React, { useState, PropsWithChildren, useEffect } from "react";
import { ToastProps, Toast } from "./Toast";
import * as uuid from "uuid";


export interface ToastContextType {
    toasts: ToastProps[]
    open: (props: ToastProps) => any;
    close: (id: string) => any;
}
export const ToastContext = React.createContext<ToastContextType>({
    toasts: [],
    open: () => { },
    close: (id: string) => { }
})

export const ToastConsumer = ToastContext.Consumer;

export type TimerStatus = 'idle' | 'running' | 'closing' | 'expired'

export const ToastProvider: React.FC = ({
    children
}) => {
    const [toasts, setToasts] = useState<ToastProps[]>([])
    const [currentStatus, setCurrentStatus] = useState<TimerStatus>('idle');
    const [current, setCurrent] = useState<ToastProps | null>();
    const open = (props: ToastProps) => {

        setToasts(toasts => {
            return [...toasts, props]
        })
    }
    useEffect(() => {
        if (currentStatus == 'idle') {
            const nextToastAfter = toasts.find(toast => !toast.isExpired);
            if (nextToastAfter) {
                startNextTimer(nextToastAfter);
            }
        }
    }, [toasts.length])
    const startNextTimer = (nextToast: ToastProps | undefined) => {
        if (nextToast == null) {
            setCurrentStatus('idle');
            return;
        }
        setCurrentStatus('running');
        setCurrent(nextToast)
        setTimeout(() => {
            setCurrentStatus('closing')
            setTimeout(() => {
                setToasts(toasts => {
                    const updated = toasts.map(toast => {
                        if (toast.id === nextToast.id) return { ...toast, isExpired: true, isOpen: false }
                        return toast;
                    });
                    const nextToastAfter = updated.find(toast => !toast.isExpired);
                    startNextTimer(nextToastAfter);
                    return updated;
                })
            }, 200)

        }, nextToast.duration)
    }

    const close = (id: string) => {
        setToasts(toasts => {
            return toasts.map((toast, index, arr) => {
                if (toast.id === id) {
                    return { ...toast, status: 'closing' }
                }
                return toast;
            })
        })
    }
    return (
        <ToastContext.Provider value={{ toasts, open, close }}>
            {current &&
                <Toast message={current.message} duration={current.duration} close={close} id={current.id} isOpen={currentStatus === 'running'} isExpired={false} />
            }
            {children}
        </ToastContext.Provider>
    )
}