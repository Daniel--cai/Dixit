/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import * as styles from "./Table.styles";
interface TableProps {
    tableMaxHeight?: number | string
}
export const Table: React.FC<TableProps> = ({ tableMaxHeight }) => {
    const headings = ["Name", "Score"]
    const rows = [["Hermione Granger", "1234"], ["Hermione Granger", "1234"], ["Hermione Granger", "1234"]]

    return (
        <div sx={styles.tableWrapperCss(tableMaxHeight || 'auto')}>
            <table sx={styles.tableCss}>
                <thead sx={styles.tableHeadCss}>
                    <tr sx={styles.tableTrCss}>{headings.map((heading, i) => (
                        <th key={i} sx={styles.tableThCss}>{heading}</th>
                    ))}</tr>
                </thead>
                <tbody sx={styles.tableBodyCss}>
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
            </table >
        </div>
    )
}