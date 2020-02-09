/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";

import * as styles from "./Table.styles";
interface TableProps {

}
export const Table: React.FC<TableProps> = () => {
    const headings = ["Name", "Score"]
    const rows = [["Hermione Granger", "1234"], ["Hermione Granger", "1234"], ["Hermione Granger", "1234"]]

    return (
        <table sx={styles.tableCss}>
            <tbody>
                <tr sx={styles.tableTrCss}>{headings.map((heading, i) => (
                    <th key={i} sx={styles.tableThCss}>{heading}</th>
                ))}</tr>
                {
                    rows.map((cols, i) => (
                        <tr key={i} sx={styles.tableTrCss}>
                            {cols.map((col, j) => (
                                <td key={j} sx={styles.tableTdCss}>{col}</td>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        </table >)
}