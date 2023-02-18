import { styled } from "~/configuration.stitches";
import { SectionStyled, SmallHeading, BigHeading } from "~/styles/generalStyles";

const HeroSectionStyled = styled(SectionStyled, {
    minHeight: "86vh"
})

export default function Hero() {
    return (
        <HeroSectionStyled id="hero">
            {/* TODO: Add animations to divs */}
            <div>
                <SmallHeading>Hi, my name is</SmallHeading>
            </div>

            <div>
                <BigHeading color="lighter">Henrique Tomé Damasio!</BigHeading>
            </div>

            <div>
                <BigHeading color="light">A Full Stack web developer.</BigHeading>
            </div>

            <div>
                <p>
                    I'm a software developer that loves building and designing amazing digital experiences. And I'm always seeking new opportunities to grow! Currently helping change the financial market at
                    <a href="https://www.nelogica.com.br" target="_blank" rel="noreferrer"> Nelogica</a>
                    .
                </p>
            </div>
        </HeroSectionStyled>
    );
}