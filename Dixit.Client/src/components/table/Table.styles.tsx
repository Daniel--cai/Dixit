import { SxStyleProp } from "theme-ui";

export const tableCss: SxStyleProp = {
    width: "100%",
    border: "solid 1px",
    borderColor: "gray-200",
    borderCollapse: "collapse",
    position: 'relative'
}

export const tableBodyCss: SxStyleProp = {
    display: 'table-row-group',
    width: '100%'
}

export const tableTdCss: SxStyleProp = {
    padding: "sm",
}

export const tableHeadCss: SxStyleProp = {
    variant: "text.subheading",
    display: 'table-header-group'
}

export const tableThCss: SxStyleProp = {
    padding: "sm",
}

export const tableTrCss: SxStyleProp = {
    border: "solid 1px",
    borderColor: "gray-300",
    backgroundColor: "white",
    textAlign: 'left',
    padding: "sm",

}


export const tableWrapperCss = (height: number | string): SxStyleProp => ({
    height
})