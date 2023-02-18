import { Link } from "@remix-run/react";
import { styled } from "../configuration.stitches"

export const Button = styled("button", {
    color: "$secondaryLight",
    backgroundColor: "none",
    border: "none",
    fontSize: "$6",
    fontFamily: "$mono",
    lineHeight: "1",
    textDecoration: "none",
    cursor: "pointer",
    px: "1.5rem",
    py: "1rem",

    '& + button': {
        marginLeft: '10px',
    },

    '& a:-webkit-any-link': {
        textDecoration: "none",
        color: "$secondaryLighter"
    },

    '&:hover': {
        transition: "$slowEnter",
        backgroundColor: "$secondaryHover"
    },

    variants: {
        size: {
            sm: {
                px: "0.75rem",
                py: ".5rem",
            },
            md: {
                px: "1rem",
                py: ".75rem",
            },
            lg: {},
        },
        style: {
            primary: {
                backgroundColor: "$primary",
            },
            secondary: {
                backgroundColor: "$secondary",
                color: "$whiteColor",

                '& a:-webkit-any-link': {
                    textDecoration: "none",
                    color: "$whiteColor"
                },
            },
            outline: {
                backgroundColor: "transparent", // when outlined
            },
            ghost: {
                border: "none", // when bordered
                backgroundColor: "transparent", // when outlined
            }
        },
        rounded: {
            true: {
                borderRadius: "5px", // when rounded
            }
        },
        bordered: {
            true: {
                border: "1px solid $secondary", // when bordered
            }
        }
    },
    defaultVariants: {
        style: 'primary',
        size: 'lg'
    }
    // margin: 80px auto 0px;
});

// type Props = {
//     children?:
//     | JSX.Element
//     | JSX.Element[]
//     | string
//     | string[],
//     outline?: Boolean
// };

// const defaultProps = {
//     outline: false,
// };

// export const Button = (props: Props) => {
//     function btnClicked() {
//         console.log("Btn clicked!" + `${props.children?.toString}`)
//     }

//     function onHoverStart() {

//     }

//     function onHoverEnd() {

//     }

//     function GetBg(): string {
//         if (props.outline)
//             return 'outline'
//         return ''
//     }

//     return (
//         <>
//             <Btn
//                 onMouseEnter={onHoverStart}
//                 onMouseLeave={onHoverEnd}
//                 onClick={btnClicked}
//             >
//                 {props.children}
//             </Btn>
//         </>
//     )
// };

// Button.defaultProps = defaultProps;