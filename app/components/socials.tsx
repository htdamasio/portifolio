import { isNetworkRequestInFlight } from "@apollo/client/core/networkStatus";
import { Children, JSXElementConstructor } from "react";
import { RiGithubLine, RiLinkedinLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import { styled } from "~/configuration.stitches";

const socials = [
    {
        name: "Github",
        link: "https://github.com/htdamasio",
        icon: RiGithubLine
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/henriquetome/",
        icon: RiInstagramLine
    },
    {
        name: "Twitter",
        link: "https://twitter.com/henriquetomed",
        icon: RiTwitterLine
    },
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/henriquetome/",
        icon: RiLinkedinLine
    }
]

const SocialWrapper = styled('div', {
    display: "none",
    variants: {
        place: {
            "footer": {
                "@sm": {
                    width: "100%",
                    maxWidth: "270px",
                    mb: "10px",
                    mx: "auto",
                    display:" block",
                }
            },
            "floater": {
                position: "fixed",
                top: "40%",
                right: "15px",
                display: "flex",
                flexDirection: "column",
                "@sm": {
                    display: "none"
                }
            },
        }
    },
    defaultVariants: {
        place: "footer"
    }
});

const SocialsUList = styled('ul', {
    variants: {
        place: {
            "footer": {
                justifyContent: "space-between",
            },
            "floater": {
                flexDirection: "column",
            }   
        }
    },

    display: "flex",
    alignItems: "center",
    listStyle: "none",
    '-webkit-box-align': "center",
    '-webkit-box-pack': "justify",
});

const SocialItem = styled('li', {
    width: "25px",
    height: "25px",
    ma: "10px",
    "& a": {
        width: "100%",
        height: "100%",
        display: "inline-block",
        textDecorationSkipInk: "auto",
        textDecoration: "none",
        color: "$slateLightest",
        transition: "$slowEnter",
        "&:hover": {
            position: "relative",
            bottom: "3px",
            transition: "$slowEnter"
        },
        "& svg": {
            color: "white",
            width: "100%",
            height: "100%",
            "&:hover": {
                color: "$secondary",
                transition: "$slowEnter"
            }
        }
    }
});

interface Props {
    place: string
}

export default function Socials({place = 'footer'} : Props) {   
    function getWrapper() {
        if  (place == 'floater') {
            return (
            <SocialWrapper place="floater">
                <SocialsUList place="floater">
                    {displaySocial()}
                </SocialsUList>
            </SocialWrapper>
            )
        }
        else {
            return ( 
            <SocialWrapper place="footer">
                <SocialsUList place="footer">
                    {displaySocial()}
                </SocialsUList>
            </SocialWrapper>
            )
        }
    }
    
    function displaySocial() {
        let socialsList = socials.map((social, i) => {
            return <SocialItem key={i}>
                <a href={social.link} aria-label={social.name} target="_blank" rel="noreferrer">
                    <social.icon/>
                </a>
            </SocialItem>
        })
        
       return socialsList;
    }
    
    return (
        <>
            {getWrapper()}
        </>
    );
}