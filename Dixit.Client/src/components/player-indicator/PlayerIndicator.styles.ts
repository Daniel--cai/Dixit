import { SxStyleProp } from "theme-ui";
import { keyframes } from '@emotion/core';

export const containerCss: SxStyleProp = {
    display: 'flex',
    justifyContent: 'center',
    my: 'sm',
    '> :not(:last-of-type)': {
        mr: 'sm'
    }
}

const pulseRing = keyframes`
    0% {
    transform: scale(.33);
    }
    80%, 100% {
    opacity: 0;
    }
}`;

const pulseDot = keyframes`
    0% {
    transform: scale(.8);
    }
    50% {
    transform: scale(1);
    }
    100% {
    transform: scale(.8);
    }
}`

export const avatarCss: SxStyleProp = {
    '&:before': {
        content: "''",
        position: 'absolute',
        display: 'block',
        width: '200%',
        height: '200%',
        borderRadius: '100%',
        backgroundColor: 'green-light-1',
        animation: `${pulseRing} 1 s cubic-bezier(0.45, 0.25, 0.60, 0.95) infinite`,
    },
    
    height: '4rem',
    width: '4rem',
    textAlign: 'center',
    variant: 'text.label',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '0.125rem solid',
    borderRadius: '50%',
    borderColor: 'green-light-1',
    color: 'green-light-1',
    position:'relative'
};
