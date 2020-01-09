import { SxStyleProp } from "theme-ui";

export const carouselCss: SxStyleProp = {
    scrollSnapType: "x mandatory",
    "-webkit-overflow-scrolling": "touch",
    overflowX: "auto",
    display:"grid",
    gridTemplateColumns: ["repeat(6, 75%)","repeat(6, 80%)","repeat(6, 85%)"],
    columnGap: "md",
    "> div": {
        scrollSnapAlign: "center",
    },
};
