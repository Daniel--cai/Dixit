/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import * as styles from "./Table.styles";

export interface TableColumnDefinition<T> {
    header: React.ReactNode;
    propertyName: string;
    renderProp?: (child: T) => any;
}

export interface TableDataRow {
    [property: string]: any
}

interface TableProps {
    tableMaxHeight?: number | string
    columns: TableColumnDefinition<any>[]
    data: TableDataRow[]
}
export const Table: React.FC<TableProps> = ({ tableMaxHeight, data, columns }) => {
    const headings = ["Name", "Score"]
    return (
        <div sx={styles.tableWrapperCss(tableMaxHeight || 'auto')}>
            <table sx={styles.tableCss}>
                <thead sx={styles.tableHeadCss}>
                    <tr sx={styles.tableTrCss}>{columns.map((column, i) => (
                        <th key={i} sx={styles.tableThCss}>{column.header}</th>
                    ))}</tr>
                </thead>
                <tbody sx={styles.tableBodyCss}>
                    {
                        data.map((row, i) => (
                            <tr key={i} sx={styles.tableTrCss}>
                                {columns.map((col, j) => (
                                    <td key={j} sx={styles.tableTdCss}>
                                        {
                                            col.renderProp ?
                                                col.renderProp(row) :
                                                <div>{row[col.propertyName]}</div>}

                                    </td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table >
        </div>
    )
}