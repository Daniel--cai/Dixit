import { SxStyleProp } from "theme-ui";

export const containerCss: SxStyleProp = {
    display: 'flex',
    justifyContent: 'center',
    '> :not(:last-of-type)': {
        mr: 'sm'
    }
}

export const avatarCss: SxStyleProp =
{
    height: '4rem',
    width: '4rem',
    textAlign: 'center',
    variant: 'text.label',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '0.125rem solid',
    borderRadius: '50%',
    borderColor: 'blue',
    color: 'blue'
};
