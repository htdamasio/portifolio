import Logo from '~/components/icons/Logo'
import { styled } from '~/configuration.stitches';
import { Box } from './box';

const StyledLogo = styled('div', {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    // height: "auto",
    maxWidth: "clamp(75px,4vw,100px)",
    maxHeight: "clamp(75px,4vw,100px)",
    // pt: "15px",
    "& svg": {
        width: "100%",
        height: "100%",
        // preserveAspectRatio: "none",
        // viewBox: "0 0 25 25"
    }
})

export const PLogo = () => {
    return (
        <StyledLogo>
            <Logo />
        </StyledLogo>
    );
}