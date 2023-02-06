import { styled } from "../configuration.stitches"

export const Box = styled("div", {
    display: "flex",
    justifyContent: "start",
    alignSelf: "center",

    variants: {
        align: {
            center: {
                alignItems: "center",
            },
            left: {
                alignItems: "flex-start",
            },
            right: {
                alignItems: "flex-end",
            },
        },
        justify: {
            bewteen: {
                justifyContent: "space-between",
            },
            around: {
                justifyContent: "space-around",
            },
            center: {
                justifyContent: "center",
            }
        },
        direction: {
            row: {
                flexDirection: "row",
            },
            column: {
                flexDirection: "column",
            },
        },
    },
});