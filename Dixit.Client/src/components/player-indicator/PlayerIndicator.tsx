/** @jsx jsx */
import { jsx } from "theme-ui";
import { ReactNode } from "react";
import * as styles from "./PlayerIndicator.styles";

export type Status = 'neutral' | 'loading'
export type Size = 'sm' | 'lg'
export interface Player {
    key?: any;
    name: string;
    status: Status;
}

interface PlayerIndicatorProps {
    players: Player[],
    renderChildren?: (key: any) => ReactNode | string
}
export const PlayerIndicator: React.FC<PlayerIndicatorProps> = ({ players, renderChildren }) => {
    return (
        <div sx={styles.containerCss}>
            {players.map((player, index) => {
                const key = player.key || index;
                return renderChildren ? renderChildren(key) :
                    (<PlayerIndicatorIcon status={player.status} key={key} />)
            })}
        </div>
    )
}

export const PlayerIndicatorIcon: React.FC<{ size?: Size, status: Status }> = ({ status, size = 'lg' }) => {
    return <div sx={styles.avatarCss({ pulsate: status === 'loading', size })}>

    </div>
}