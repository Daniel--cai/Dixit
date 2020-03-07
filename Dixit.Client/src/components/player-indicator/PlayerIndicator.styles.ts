import { SxStyleProp } from "theme-ui";
import { keyframes } from '@emotion/core';
import { colors } from "../../theme/foundation/colors";
import { Size } from ".";

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

interface AvatarCssProps {
    pulsate: boolean;
    size: Size;
    filled: boolean;
}

export const avatarCss = (props: AvatarCssProps): SxStyleProp => {
    let size = '2rem';
    if (props.size === 'sm'){
        size = '1.5rem'
    }

    let style = {
        height: size,
        width: size,
        textAlign: 'center',
        variant: 'text.label',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '0.125rem solid',
        borderRadius: '50%',
        borderColor: 'blue-light-1',
        backgroundColor: props.filled ? 'blue-light-1': 'none',
        color: 'white',
        position: 'relative',
        '&:before': {}
    }
    if (props.pulsate) {
        style.color = 'blue';
        style.backgroundColor = 'white'
        style['&:before'] = {
            content: "''",
            position: 'absolute',
            display: 'block',
            width: '200%',
            height: '200%',
            borderRadius: '100%',
            backgroundColor: 'blue-light-1',
            animation: `${pulseRing} 1s cubic-bezier(0.45, 0.25, 0.60, 0.95) infinite`,
        }
    }
    return style;
}