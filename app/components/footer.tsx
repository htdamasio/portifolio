import { styled } from "~/configuration.stitches";
import Socials from "./socials";

const Wrapper = styled('div', {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    py: "25px",
});

const Credits = styled('div', {
    color: "White",
    fontFamily: "$mono",
    "& a": {
        textDecoration: "none",
        color: "$slateLight"
    }
})

export default function Footer() {
    return (
        <Wrapper>
            <Socials place="footer"/>
            <Credits>
                Design Inspired by <a target="_blank" rel="noreferrer" href="https://brittanychiang.com/">Brittany Chiang</a>
            </Credits>
        </Wrapper>
    );
}