import { gql, useQuery } from "@apollo/client";
import { styled } from "~/configuration.stitches";
import { AnimatedLink, SectionStyled, StyledHeader, StyledUlList } from "~/styles/generalStyles";
import { useState, useEffect } from "react";

const JobsSectionStyled = styled(SectionStyled, {
    py: "75px",
    maxWidth: "700px"
});

const Inner = styled('div', {
    display: "flex",
    minHeight: "340px",
    "@xs": {
        flexDirection: "column"
    }
});

const JobsList = styled('div', {
    display: "block",
    position: "relative",
    zIndex: "3",
    width: "max-content",
    padding: "0px",
    margin: "0px",
    listStyle: "none",
    "@xs": {
        display: "flex",
        flexDirection: "row",
        width: "auto",
        overflowX: "scroll",
        scrollbarColor: "black",
    }
});

const JobDescription = styled('div', {
    position: "relative",
    width: "100%",
    ml: "20px",
    "@xs": {
        ml: "0px",
    }
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
        // background: "$secondaryHover",
        color: "$secondary"
    },

    "&:active, &:selected": {
        color: "$secondary"
    },

    "@xs": {
        borderLeft: "none",
        borderTop: "2px solid $secondaryHover",
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
        '&[aria-selected="true"]': {
            borderLeft: "none",
            borderTop: "2px solid $secondary",
        },
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
    },
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
    title: string;
    company: string;
    location: string;
    range: string;
    url: string;
    experience: string[];
}

export default function Jobs() {
    const { data, error, loading } = useQuery(WORK_PLACES);

    const [jobs, setJobs] = useState<JobType[]>([])
    const [selectedButton, setSelectedButton] = useState(-1)
    const [selectedJob, setSelectedJob] = useState<JobType>({
        id: 0,
        date: new Date(),
        title: "",
        company: "",
        location: "",
        range: "",
        url: "",
        experience: [],
    })

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
        let selectedJob: JobType | null = jobs.find(jb => jb.id === id) ?? null;
        if (selectedJob) {
            setSelectedJob(selectedJob);
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
                                <AnimatedLink href={selectedJob.url}>{selectedJob.company}</AnimatedLink>
                            </span>
                            <p className="range">{selectedJob.range}</p>
                        </JobHeader>
                        <div>
                            <StyledUlList columns={1} arrowTop={25} arrowSize="medium" ml="none">
                                {displayExperiences()}
                            </StyledUlList>
                        </div>
                    </JobPanel>
                </JobDescription>
            </Inner>
        </JobsSectionStyled>
    );
}