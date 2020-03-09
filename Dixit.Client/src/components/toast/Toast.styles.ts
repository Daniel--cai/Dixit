import { SxStyleProp } from "theme-ui";
import { TransitionStatus } from "react-transition-group/Transition";
const height = 80;
export const toastCss: SxStyleProp = {
    position: "absolute",
    width: '100%',
    top: `calc((100% - ${height}%)/2)`,
    height: `${height}%`,
    backgroundColor: 'blue-200',
    opacity:'50%',
    color: 'white',
    variant: 'text.heading',
    transition: "all 200ms ease-in-out",
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
}

export const opacityTransitionCss: { [key in TransitionStatus]: SxStyleProp } = {
    entering: { opacity: 0, transform: "translateY(5%)" },
    entered: { opacity: 1, transform: "translateY(0%)" },
    exiting: { opacity: 0, transform: "translateY(5%)" },
    exited: { opacity: 0, transform: "translateY(5%)" },
    unmounted: { opacity: 0, transform: "translateY(5%)" },
}
