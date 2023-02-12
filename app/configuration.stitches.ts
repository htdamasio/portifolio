import { createStitches } from '@stitches/react'

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            // primary: "#04043b",
            primary: "#0C1D36",
            primaryLight: "#315484",
            primaryLighter: "#0459f5",

            // primary: "#000033",
            // primaryLight: "000099",
            // primaryLighter: "1A1AFF",

            secondary: "#F9CC0B",
            secondaryLight: "#FBDB51",
            secondaryLighter: "#FCEB9C",
            secondaryHover: "rgba(252, 234, 156, .25)",

            // secondary: "#06bbfa",
            // secondaryLight: "#50D1FB",
            // secondaryLighter: "#9BE4FD",

            // secondary: "#00ff00",
            // secondaryLight: "#4DFF4D",
            // secondaryLighter: "#99FF99",

            slate: "#708090",
            slateLight: "#9AA6B1",
            slateLighter: "#C5CCD3",
            blackColor: "#121212",
            whiteColor: "#ffffff"
        },
        space: {},
        fontSizes: {
            1: "48px",
            2: "36px",
            3: "30px",
            4: "20px",
            5: "18px",
            6: "16px",
            7: "12px",
        },
        fonts: {
            system: "Inter, apple-system, sans-serif",
            mono: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace"
        },
        fontWeights: {
            extraLight: "200",
            light: "300",
            normal: "500",
            bold: "600",
            bolder: "700"
        },
        lineHeights: {},
        letterSpacings: {},
        sizes: {},
        borderWidths: {},
        borderStyles: {},
        radii: {},
        shadows: {},
        zIndices: {},
        transitions: {
            slowEnter: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)"
        },
    },
    media: {
        xs: '(max-width: 640px)',
        sm: '(max-width: 768px)',
        md: '(max-width: 1024px)',
        lg: '(max-width: 1280px)',
        xl: '(max-width: 1440px)',
    },
    utils: {
        ma: (value: string) => ({ margin: value }),
        mx: (value: string) => ({ marginLeft: value, marginRight: value }),
        my: (value: string) => ({ marginTop: value, marginBottom: value }),
        mr: (value: string) => ({ marginRight: value }),
        ml: (value: string) => ({ marginLeft: value }),
        mt: (value: string) => ({ marginTop: value }),
        mb: (value: string) => ({ marginBottom: value }),

        pa: (value: string) => ({ padding: value }),
        px: (value: string) => ({ paddingLeft: value, paddingRight: value }),
        py: (value: string) => ({ paddingTop: value, paddingBottom: value }),
        pr: (value: string) => ({ paddingRight: value }),
        pl: (value: string) => ({ paddingLeft: value }),
        pt: (value: string) => ({ paddingTop: value }),
        pb: (value: string) => ({ paddingBottom: value }),

        flexbt: () => ({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        })
    },
});

export const globalStyles = globalCss({
    "*, *::before, *::after": { boxSizing: "inherit" },
    "body, h1, h2, h3, h4, p, figure, blockquote, dl, dd": {
        margin: 0
    },
    "ul[role='list'], ol[role='list']": { listStyle: "none" },
    "ul": { margin: "0px", padding: "0px" },
    "html:focus-within": { scrollBehavior: "smooth" },
    body: {
        backgroundColor: "$primary",
        fontFamily: "$mono",
        minHeight: "100vh",
        textRendering: "optimizedSpeed",
        lineHeight: 1.2,
        width: "auto"
        // overflowX: "hidden",
    },
    "a:not([class])": { textDecorationSkipInk: "auto" },
    "img,picture": { maxWidth: "100%", display: "block" },
    "input,button,textarea,select": { font: "inherit" },
    "@media (prefers-reduced-motion: reduce)": {
        "html:focus-within": { scrollBehavior: "auto" },
        "*, *::before, *::after": {
            animationDuration: "0.01ms !important",
            animationIterationCount: "1 !important",
            transitionDuration: "0.01ms !important",
            scrollBehavior: "auto !important",
        },
    },
});