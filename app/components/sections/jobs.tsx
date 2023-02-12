import { gql, useQuery } from "@apollo/client";
import { styled } from "~/configuration.stitches";
import { SectionStyled, StyledHeader, StyledUlList } from "~/styles/generalStyles";
import { useState, useEffect } from "react";

const JobsSectionStyled = styled(SectionStyled, {
    py: "100px",
    maxWidth: "700px"
});

const Inner = styled('div', {
    display: "flex",
    minHeight: "340px",
});

const JobsList = styled('div', {
    display: "block",
    position: "relative",
    zIndex: "3",
    width: "max-content",
    padding: "0px",
    margin: "0px",
    listStyle: "none",
});

const JobDescription = styled('div', {
    position: "relative",
    width: "100%",
    ml: "20px"
});

const JobPanel = styled('div', {
    width: "100%",
    height: "auto",
    py: "10px",
    px: "5px"
})

const JobButton = styled('button', {
    textDecoration: "none",
    textDecorationSkipInk: "auto",
    '-webkit-box-align': "center",
    position: "relative",
    transition: "$slowEnter",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    height: "42px",
    pa: "0",
    px: "20px",
    width: "100%",
    background: "transparent",
    color: "$slate",
    border: "none",
    borderLeft: "2px solid $secondaryHover",
    fontFamily: "$mono",
    fontSize: "$7",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",

    '&[aria-selected="true"]': {
        color: "$secondary",
        borderLeft: "2px solid $secondary",
        transition: "$slowEnter",
    },

    "&:hover, &:focus": {
        background: "$secondaryHover",
        color: "$secondary"
    },

    "&:active, &:selected": {
        color: "$secondary"
    }
});

const JobHeader = styled('h3', {
    mb: "5px",
    fontSize: "22px",
    fontWeight: "$light",
    fontFamily: "$mono",

    "& span": {
        color: "$slateLighter",
    },

    "& .company": {
        color: "$secondary",
        "& a": {
            color: "$secondary",
            cursor: "pointer",
            textDecoration: "none",
            textDecorationSkipInk: "auto"
        }
    },

    "& p": {
        ma: "0",
        mb: "25px",
        color: "$slateLight",
        fontFamily: "$mono",
        fontSize: "14px",
    }
});

const JobStyledUlList = styled(StyledUlList, {
});

// GraphQL query
const WORK_PLACES = gql`
    query WorkPlaces {
        workPlaces {
            id
            company
            date
            experience
            location
            range
            title
            url
        }
    }
`

interface JobType {
    id: number;
    date: Date;
    title: String;
    company: String;
    location: String;
    range: String;
    url: String;
    experience: String[];
}

export default function Jobs() {
    const { data, error, loading } = useQuery(WORK_PLACES);

    const [jobs, setJobs] = useState([])
    const [selectedButton, setSelectedButton] = useState(-1)
    const [selectedJob, setSelectedJob]: JobType = useState({})

    useEffect(() => {
        if (data) {
            setJobs(data.workPlaces);
            if (data.workPlaces.length > 0) {
                setSelectedButton(data.workPlaces[0].id);
                setSelectedJob(data.workPlaces[0]);
            }
        }
    }, [data])

    function buttonSelected(id: number): Boolean {
        return id == selectedButton;
    }

    function onButtonClicked(ev: React.MouseEvent<HTMLButtonElement>, id: number) {
        setSelectedButton(id)

        if (jobs.find(jb => jb.id === id)) {
            setSelectedJob(jobs.find(jb => jb.id === id));
        }
    }

    function renderButtons() {
        var bts = jobs.map((job: JobType, i: number) => {
            return (
                <JobButton
                    key={i}
                    onClick={(event) => onButtonClicked(event, job.id)}
                    aria-selected={buttonSelected(job.id)}
                >
                    {job.company}
                </JobButton>
            )
        });
        return bts;
    }

    function displayExperiences() {
        if (selectedJob && selectedJob.experience) {
            var items = selectedJob.experience.map((xp: String, i: number) => {
                return (
                    <li
                        key={i}
                    >
                        {xp}
                    </li>
                )
            });
            return items;
        } else {
            return <></>
        }
    }

    return (
        <JobsSectionStyled id="jobs">
            <StyledHeader>
                Where I've Worked
            </StyledHeader>
            <Inner>
                <JobsList>
                    {renderButtons()}
                </JobsList>
                <JobDescription>
                    <JobPanel>
                        <JobHeader>
                            <span>{selectedJob.title}</span>
                            <span className="company">
                                {` @ `}
                                <a href={selectedJob.url}>{selectedJob.company}</a>
                            </span>
                            <p className="range">{selectedJob.range}</p>
                        </JobHeader>
                        <div>
                            <StyledUlList columns={1} arrowTop={25} arrowSize="medium" ml="none">
                                {displayExperiences()}
                            </StyledUlList>
                        </div>
                        aqui vai o texto
                    </JobPanel>
                </JobDescription>
            </Inner>
        </JobsSectionStyled>
    );
}