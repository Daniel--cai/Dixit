
//realign font size baseline with typographical design system
const rowHeight: number = 4;
const baseFontSize: number = 16;
const descenderScale: number = 0.15;
const baseOffset: number = descenderScale * baseFontSize;

const baseline = (scale: number, rowSpan: number) => {
    const bodyFontSize: number = scale * baseFontSize;
    const bodyLineHeight: number = rowSpan * rowHeight;
    const bodyLineHeightOffset: number = (bodyLineHeight - bodyFontSize) / 2;
    const offsetTransform: number = baseOffset * bodyScale + bodyLineHeightOffset;
    return offsetTransform;
}

//scales (em), height (row spans)
const bodyScale = 1;
const bodyHeight = 6;

const headingScale = 1.75;
const headingHeight = 5;

const subHeadingScale = 0.75;
const subHeadingHeight = 1;

const labelScale = 1.25;
const labelHeight = 1.25;

export const typography = {
    fontSizes: [
        "0.5rem",
        "0.75rem",
        `${bodyScale}rem`,
        "1.25rem",
        "1.5rem",
        "2rem",
        "3rem",
        "4rem"
    ],
    lineHeights: {
        body: `${bodyHeight * rowHeight / 16}rem`,
        heading: `${headingHeight}rem`,
        subHeading: `${subHeadingHeight}rem`,
        label: `${labelHeight}`
    },
    text: {
        heading: {
            // transform: baseline(headingScale, headingHeight),
            lineHeight: `${headingHeight}rem`,
            fontSize: `${headingScale}rem`
        },
        body: {
            // transform: `translateY(${baseline(bodyScale, bodyHeight)}px)`,
            lineHeight: `${bodyHeight * rowHeight / 16}rem`,
            fontSize: `${bodyScale}rem`
        },
        subheading: {
            // transform: baseline(subHeadingScale, subHeadingHeight),
            lineHeight: `${subHeadingHeight}rem`,
            fontSize: `${subHeadingScale}rem`
        },
        label: {
            // transform: baseline(labelScale, labelHeight),
            lineHeight: `${labelHeight}`,
            fontSize: `${labelScale}rem`
        }
    }
}
