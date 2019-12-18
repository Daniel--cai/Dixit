
//realign font size baseline with typographical design system
const rowHeight: number = 8; 
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
const bodyHeight = 3;

const headingScale = 1.75;
const headingHeight= 5;

const subHeadingScale = 0.75;
const subHeadingHeight= 2;

const labelScale = 1.25;
const labelHeight= 1;

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
        body: bodyHeight,
        heading: headingHeight,
        subHeading: subHeadingHeight,
        label: labelHeight
    },
    offsetTransforms: {
        body: baseline(bodyScale, bodyHeight),
        heading: baseline(headingScale, headingHeight),
        subHeading: baseline(subHeadingScale, subHeadingHeight),
        label: baseline(labelScale, labelHeight)
    }
}