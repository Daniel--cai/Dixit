/** @jsx jsx */
import { jsx } from "theme-ui";
import { ReactNode } from "react";
import * as styles from "./PlayerIndicator.styles";

export type Status = 'neutral' | 'loading'

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
                    (<PlayerIndicatorIcon player={player} key={key} />)
            })}
        </div>
    )
}

const PlayerIndicatorIcon: React.FC<{ player: Player }> = ({ player }) => {
    return <div sx={styles.avatarCss}>
        {player.name}
    </div>
}