import { SectionStyled, StyledHeader, StyledUlList } from "~/styles/generalStyles";
import { styled } from "~/configuration.stitches";
import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react"
import profile from "~/content/profile.jpg"

const InnerContent = styled('div', {
    display: "grid",
    gridTemplateColumns: "3fr 2fr",
    gap: "30px",

    "@md": {
        gridTemplateColumns: "1fr"
    }
});

const TextWrapper = styled('div', {
    "& p": {
        mt: "0",
        mb: "10px",
        maxWidth: "fit-content",
        color: "$slateLight",
        fontSize: "$6"
    }
});

const ProfileWrapper = styled('div', {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    ma: "0",

    "& img": {
        ml: "50px",
        borderRadius: "200px",
        transition: "$slowEnter",
        boxShadow: "0 0 30px -10px rgba(252, 234, 156, .3   )",

        '&:hover': {
            transition: "$slowEnter",
            boxShadow: "0 0 30px -10px #F9CC0B",
        },

        "@md": {
            ml: "0px",
            width: "75%",
        }

    }
});

const AboutSectionStyled = styled(SectionStyled, {
    py: "100px"
})

const Technologies = gql`
  query Technologies {
    technologies {
      id
      name
      url
    }
  }
`

interface technologyType {
    id: number,
    name: string
}

export default function About() {
    const { data, error, loading } = useQuery(Technologies);
    const [tech, setTech] = useState([]);

    useEffect(() => {
        if (data) {
            setTech(data.technologies);
        }
    }, [data])

    function displayTechnologies() {
        if (tech.length > 0) {
            var technologiesList = tech.map((el: technologyType) => {
                return <li key={el.id}>{el.name}</li>;
            });
            return technologiesList;
        } else {
            return <></>
        }
    }

    return (
        <AboutSectionStyled id="about">
            <StyledHeader>
                About Me
            </StyledHeader>
            <InnerContent>
                <div>
                    <TextWrapper>
                        <p>
                            Hello! My name is Henrique and what fulfills me is creating things that make other <a>people's lives better</a>. My interest in web development started back in 2019 when I get a internship at an startup. It just felt right since the beginning and I just get more and more excited about it.
                        </p>
                        <p>
                            Advancing a little further, I end up switching to backend development, so this gave me a very good knowledge about server-side applications. My main goal these days is unity the passion about front-end with very powerfull back-end applications to help build amazing and <a>life changing experiences</a>.
                        </p>

                        <p>Here are a few technologies I’ve been working with recently:</p>
                    </TextWrapper>
                    <StyledUlList>
                        {displayTechnologies()}
                    </StyledUlList>
                </div>
                <ProfileWrapper>
                    <img
                        src={profile}
                    />

                </ProfileWrapper>
            </InnerContent>
        </AboutSectionStyled>
    );
}