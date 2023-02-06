import { styled } from "~/configuration.stitches";
import { Box } from "./box";
import { ResponsiveContainer } from "./container";
import { Button } from "./buttons";
import { Link } from "@remix-run/react"
import { PLogo } from "./logo";

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
    alignContent: "center",
    width: "100%",
    maxWidth: "1600px",
    fontSize: "$6",
    fontFamily: "$mono",
    py: '5px',
    color: "$secondary",
    px: "1.5rem",
    "@sm": { py: '0px' },

    ".navbar-logo": {
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
        '& Button': {
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
            },
        },
    },
});

export default function NavigationBar() {
    return (
        <ResponsiveContainer>
            <Box align="center" justify="center">
                <NavBar>
                    <Box direction="row" align="center" className="navbar-logo">
                        {/* <div className="logo"></div> */}
                        <PLogo />
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
                        <Button size="sm" style="outline" bordered rounded>
                            Resume
                        </Button>
                        <div className="navbar-cta__menu">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </Box>
                </NavBar>
            </Box>
        </ResponsiveContainer >
    );
};