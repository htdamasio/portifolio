import { SectionStyled, StyledHeader } from "~/styles/generalStyles";

export default function About() {
    return (
        <SectionStyled id="about">
            <StyledHeader>
                About Me
            </StyledHeader>
            <div className="innercontent"></div>
        </SectionStyled>
    );
}