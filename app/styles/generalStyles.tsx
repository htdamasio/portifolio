import { styled } from "~/configuration.stitches";

export const SmallHeading = styled('a', {
    color: "$secondary",
    fontSize: "clamp(14px,4vw,$5)",

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
    // minHeight: "100vh",
    // height: "100vh",
    py: "0",
    // mx: "clamp(25px, 10vw, 150px)",
    mx: "auto",
    maxWidth: "900px",

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
    mt: "5px",
    mb: "20px",
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

export const StyledUlList = styled('ul', {
    variants: {
        columns: {
            1: {
                columnCount: "1",
            },
            2: {
                columnCount: "2",
            }
        },
        ml: {
            "20": {
                ml: "20px",
            },
            "none": {
                ml: "0",
            }
        },
        arrowTop: {
            15: {
                "& li": {
                    "&:before": {
                        top: "15%",
                    }
                }
            },
            25: {
                "& li": {
                    "&:before": {
                        top: "25%",
                    }
                }
            }
        },
        arrowSize: {
            "small": {
                "& li": {
                    "&:before": {
                        fontSize: "$7",
                    }
                }
            },
            "medium": {
                "& li": {
                    "&:before": {
                        fontSize: "$5",
                    }
                }
            },
            "large": {
                "& li": {
                    "&:before": {
                        fontSize: "$3",
                    }
                }
            }
        }
    },
    defaultVariants: {
        columns: 2,
        arrowTop: 15,
        arrowSize: "small",
        ml: "20"
    },

    mt: "20px",
    listStyleType: "none",

    "& li": {
        position: "relative",
        marginBottom: "10px",
        pl: "20px",
        fontFamily: "$mono",
        fontSize: "13px",
        color: "$slateLighter",


        "&:before": {
            content: "▹",
            position: "absolute",
            left: "0px",
            color: "$secondary",
            lineHeight: "12px"
        }
    }
});

export const AnimatedLink = styled('a', {
    display: "inline-block",
    textDecoration: "none",
    textDecorationSkipInk: "auto",
    position: "relative",
    transition: "$slowEnter",
    color: "$secondary",

    "&:hover": {
        outline: "0px",
        "&:after": {
            width: "100%"
        }
    },
    "&:after": {
        content: "",
        display: "block",
        width: '0px',
        height: '1px',
        position: "relative",
        bottom: "0.05em",
        backgroundColor: "$secondary",
        transition: "$slowEnter",
        opacity: "0.5",
    }
});