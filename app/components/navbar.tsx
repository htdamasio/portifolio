import { styled } from "~/configuration.stitches";
import { Box } from "./box";
import { ResponsiveContainer } from "./container";
import { Button } from "./buttons";
import { Link } from "@remix-run/react"
import logo from "~/icons/logo.svg"
import { useState } from "react"
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

type item = {
    url: string,
    name: string
}
const navLinks: Array<item> = [
    {
        name: 'About',
        url: '/#about',
    },
    {
        name: 'Experience',
        url: '/#jobs',
    },
    {
        name: 'Work',
        url: '/#projects',
    },
    {
        name: 'Contact',
        url: '/#contact',
    },
];

const NavBar = styled('header', {
    flexbt: '',
    position: "fixed",
    top: "0",
    background: "$primary",
    boxShadow: `0 10px 30px -10px #121212`,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    fontSize: "$6",
    fontFamily: "$mono",
    py: '5px',
    color: "$secondary",
    px: "1.5rem",
    zIndex: "11",
    "@sm": { py: '0px' },

    ".wrapper": {
        flexbt: '',
        width: "100%",
        maxWidth: "1600px",
        "@sm": { pr: '10px' },
    },

    ".navbar-logo": {
        width: "100px",
        "& img": {
            py: "15px",
        },

        ".navbar-logo__anchors": {
            "@sm": { display: "none" },
            // ml: "35px",
        },
        "ul, li": {
            display: "flex",
            textDecoration: "none",
            paddingRight: "20px",
            a: {
                color: "$grey300",
                textDecoration: "none",
                "&:hover": {
                    color: "$secondaryLighter",
                },
            },
        },
    },
    ".navbar-cta": {
        '.desktop-resume': {
            fontFamily: "$mono",
            "@sm": { display: "none" },
        },
        ".navbar-cta__menu": {
            display: "none",
            pt: "10px",
            pb: "5px",
            "@sm": { display: "initial" },
            "& svg": {
                width: "30px",
                height: "30px",
                cursor: "pointer",
                position: "relative",
                zIndex: "99"
            },
        },
    },
});

const MobileMenu = styled('aside', {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    right: "0px",
    top: "0", //"92px",
    bottom: "0px",
    py: "50px",
    px: "10px",
    width: "0",
    background: "$primary",
    transition: "$slowEnter",
    zIndex: "9",
    transform: "translateX(0vw)",
    boxShadow: `0 10px 30px -10px rgba(249, 204, 11, 1)`,

    "& svg": {
        position: "absolute",
        right: "10px",
        top: "20px"
    },

    "&[aria-hidden='true']": {
        visibility: "visible",
        width: "min(75vw, 400px)",
        body: {
            filter: "blur(100px)",
        }
    },
    "&[aria-hidden='false']": {
        visibility: "hidden",
        width: "0",
    },

    "ul": {
        display: "flex",
        flexDirection: "column",
        paddingRight: "20px",
        "& li": {
            py: "15px",
        },
        a: {
            color: "$grey300",
            textDecoration: "none",
            "&:hover": {
                color: "$secondaryLighter",
            },
        },
    },
})

export default function NavigationBar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    function displayMenuIcon() {
        if (menuIsOpen) {
            return <RiCloseLine onClick={(ev) => { setMenuIsOpen(!menuIsOpen) }} />;
        } else {
            return <RiMenuLine onClick={(ev) => { setMenuIsOpen(!menuIsOpen) }} />;
        }
    }

    return (
        <ResponsiveContainer>
            <Box align="center" justify="center">
                <NavBar>
                    <div className="wrapper">
                        <Box direction="row" align="center" className="navbar-logo">
                            <img src={logo} />
                            <div className="navbar-logo__anchors">
                                <ul>
                                    {navLinks &&
                                        navLinks.map((item, i) => (
                                            <li key={i}>
                                                <Link to={item.url}>{item.name}</Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </Box>
                        <Box direction="row" align="center" className="navbar-cta">
                            <Button
                                className="desktop-resume"
                                size="sm"
                                style="outline"
                                bordered
                                rounded
                            >
                                <a href="./resume.pdf" target="_blank"
                                    rel="noreferrer">
                                    Resume
                                </a>
                            </Button>
                            <div className="navbar-cta__menu">
                                {displayMenuIcon()}
                                <MobileMenu
                                    aria-hidden={menuIsOpen}
                                >
                                    <ul>
                                        {navLinks &&
                                            navLinks.map((item, i) => (
                                                <li key={i}>
                                                    <Link
                                                        onClick={(ev) => { setMenuIsOpen(!menuIsOpen) }}
                                                        to={item.url}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                    <Button
                                        size="sm"
                                        style="outline"
                                        bordered
                                        rounded
                                    >
                                        <a href="./resume.pdf" target="_blank"
                                            rel="noreferrer">
                                            Resume
                                        </a>
                                    </Button>
                                </MobileMenu>
                            </div>
                        </Box>
                    </div>
                </NavBar>
            </Box>
        </ResponsiveContainer >
    );
};