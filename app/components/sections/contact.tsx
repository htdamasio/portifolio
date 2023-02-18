import { styled } from "~/configuration.stitches";
import { SectionStyled, StyledHeader, AnimatedLink } from "~/styles/generalStyles";
import { Button } from "../buttons";

const ContactSectionStyled = styled(SectionStyled, {
    py: "50px"
})

const ContactText = styled('div', {
    "& p": {
        mt: "0",
        mb: "10px",
        maxWidth: "fit-content",
        color: "$slateLight",
        fontSize: "$6"
    }
});

const ContentButtonWrapper = styled('div', {
    mt: "15px",
    "@xs": {
        display: "flex",
        justifyContent: "center",
    }
});

export default function Contact() {
    return (
        <ContactSectionStyled id="contact">
            <StyledHeader>
                Say Hi!
            </StyledHeader>
            <ContactText>
                <p>
                So you need a full-stack developer? Don't be shy and <AnimatedLink href="mailto:henriquetome98@gmail.com">get in touch</AnimatedLink>! 
                <br />
                I'm looking for new opportunities for my career and would love to know the challenges your company presents. I'm up to the challenge!
                </p>
            </ContactText>
            <ContentButtonWrapper>
                <Button rounded bordered>
                    <a href="mailto:henriquetome98@gmail.com" target="_blank"
                        rel="noreferrer">
                            Let's talk
                    </a>
                </Button>
            </ContentButtonWrapper>
        </ContactSectionStyled>
    );
 }