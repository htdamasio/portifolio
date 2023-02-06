import { styled } from "~/configuration.stitches";

export const SmallHeading = styled('a', {
    color: "$secondary",
    fontSize: "clamp($7,4vw,$5)",

    fontFamily: "$mono",
    fontWeight: "$light",
})

export const BigHeading = styled('a', {
    fontSize: "clamp($6,5vw,$1)",

    fontFamily: "$mono",
    fontWeight: "$light",
    variants: {
        color: {
            normal: {
                color: "$slate"
            },
            light: {
                color: "$slateLight"
            },
            lighter: {
                color: "$slateLighter"
            }
        }
    },

    defaultVariants: {
        color: 'normal'
    }
})

export const SectionStyled = styled('section', {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "100vh",
    height: "100vh",
    pa: "0",

    "-webkkit-box-align": "center",
    "-webkit-box-pack": "center",

    "& p": {
        maxWidth: "clamp(250px,70%,540px)",
        mt: "20px",
        color: "$slate",

        "& a": {
            color: "$secondary",
            cursor: "pointer",
            textDecoration: "none",
            textDecorationSkipInk: "auto"
        }
    }
})

export const StyledHeader = styled('h2', {
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "100%",
    mt: "10px",
    mb: "40px",
    whiteSpace: "nowrap",
    fontSize: "clamp($6,5vw,$2)",
    color: "$slateLighter",
    fontFamily: "$mono",
    fontWeight: "400",
    textAlign: "center",

    "&::before": {
        content: "",
        display: "block",
        position: "relative",
        mr: "10px",
        height: "8px",
        width: "8px",
        top: "1px",
        backgroundColor: "$secondaryLight",
        borderRadius: "15px"
    },

    "&::after": {
        width: "200px",
        content: "",
        display: "block",
        position: "relative",
        top: "1px",
        height: "1px",
        ml: "20px",
        backgroundColor: "$secondaryHover"
    }
})