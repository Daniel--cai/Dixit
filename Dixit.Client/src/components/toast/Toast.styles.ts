import { SxStyleProp } from "theme-ui";
import { TransitionStatus } from "react-transition-group/Transition";

export const toastCss: SxStyleProp = {
    position: "absolute",
    width: '100%',
    top: '50%',

    backgroundColor: 'blue-light-1',
    color: 'white',
    padding: 'xl',
    variant: 'text.heading',
    textAlign: 'center',
    
}

export const opacityTransitionCss: { [key in TransitionStatus]: SxStyleProp } = {
    entering: { opacity: 0, transform: "translateY(-5%)" },
    entered: { opacity: 1, transform: "translateY(0%)" },
    exiting: { opacity: 0, transform: "translateY(-5%)" },
    exited: { opacity: 0, transform: "translateY(-5%)" },
    unmounted: { opacity: 0, transform: "translateY(-5%)" },
}
