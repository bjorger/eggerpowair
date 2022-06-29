import React from "react";
import { PageWrap } from "components/page/";
import { Eyebrow, Headline, HeadlineMain } from "components/headline";
import { ColoredSpan, Variants } from "components/Components.sc";
import { useAppSelector } from "redux/hooks";
import styled from "styled-components";
import { render } from "storyblok-rich-text-react-renderer";
import { getJobs, Job, RichtextType } from "api/storyblok";

const Jobs: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    const [jobs, setJobs] = React.useState<Array<Job>>();

    function RichText(document: RichtextType) {
        return (
            <Paragraph>
                {render(document)}
                <br />
                <b>Haben wir dein Interesse geweckt?</b> <br /> Dann freuen wir uns auf einen Anruf unter{" "}
                <JobContact target="_blank" variant={theme} rel="noopener noreferrer" href={`tel:0080025326064`}>
                    00800 25326064
                </JobContact>{" "}
                (kostenlos ganz Europa) /{" "}
                <JobContact target="_blank" variant={theme} rel="noopener noreferrer" href={`tel:436890505832`}>
                    +43 689 0505832
                </JobContact>{" "}
                Oder Du sendest Deine Bewerbung mit allen aussagekräftigen Unterlagen direkt per E-Mail an{" "}
                <JobContact target="_blank" variant={theme} rel="noopener noreferrer" href={`mailto:office@eggerpowair.com`}>
                    office@eggerpowair.com
                </JobContact>
            </Paragraph>
        );
    }

    React.useEffect(() => {
        (async () => {
            setJobs(await getJobs());
        })();
    }, []);

    return (
        <PageWrap variant="dark">
            {jobs?.map((job) => (
                <JobContainer key={job.title}>
                    <JobDesc htmlFor={`collapse_${job.title}`}>
                        <Headline>
                            <Eyebrow textColor="white">Powair jobs</Eyebrow>
                            <HeadlineMain color="white">
                                Mitarbeiter*in für <ColoredSpan variant={theme}>{job.title}</ColoredSpan> m / w / d
                            </HeadlineMain>
                        </Headline>
                    </JobDesc>
                    <CollapseToggle defaultChecked type="checkbox" id={`collapse_${job.title}`} />
                    <JobContent>
                        {RichText(job.description)}
                        <SkillContainer>
                            <SkillHeadline>Skills:</SkillHeadline>
                            <GridItemUL>
                                {job.skills.map((skill, index) => (
                                    <GridItemParagraph key={`${skill.title}__${index}`} variant={theme}>
                                        {skill.title}
                                    </GridItemParagraph>
                                ))}
                            </GridItemUL>
                        </SkillContainer>
                    </JobContent>
                </JobContainer>
            ))}
        </PageWrap>
    );
};

export default Jobs;

interface GrdItemParagraphProps {
    variant: Variants;
}

const JobContainer = styled.div`
    display: flex;
    padding: 50px 0;
    flex-direction: column;

    &:not(:last-child) {
        ${({ theme }) => theme.borderBottom};
    }

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        justify-content: space-between;
    }
`;

const JobContent = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-height: 2000px;
    transition: 1s ease max-height;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        justify-content: space-between;
        flex-direction: row;
    }
`;

const JobDesc = styled.label`
    max-width: 600px;
    cursor: pointer;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none;
`;

const CollapseToggle = styled.input`
    &:checked + div {
        max-height: 0;
    }

    display: none;
`;

const Paragraph = styled.div`
    padding: 20px 0;

    ${({ theme }) => theme.fonts.paragraph};
    color: ${({ theme }) => theme.palette.white};

    a {
        color: ${({ theme }) => theme.palette.white};
    }

    p {
        margin: 0;
    }

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        max-width: 60%;
    }
`;

const SkillContainer = styled.div`
    background: #232527;
    border: 1px solid #232527;
    box-shadow: 5px 5px 27px rgba(255, 254, 254, 0.45);
    border-radius: 36px;
    padding: 20px;
    width: 200px;
    margin: 50px 10px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        padding: 40px;
        width: 300px;
        border: none;
        box-shadow: none;
        margin-top: 0;
    }
`;

const SkillHeadline = styled.h2`
    ${({ theme }) => theme.fonts.h2};
    color: ${({ theme }) => theme.palette.white};
    padding: 0;
    margin: 0;
`;

const GridItemParagraph = styled.li<GrdItemParagraphProps>`
    ${({ theme }) => theme.fonts.paragraph};
    color: ${({ theme }) => theme.palette.white};
    margin: 10px 0;

    &::marker {
        color: ${({ theme, variant }) => theme.palette[variant]};
        font-size: 20px;
    }
`;

interface JobContactProps {
    variant: Variants;
}

const JobContact = styled.a<JobContactProps>`
    color: ${({ theme, variant }) => theme.palette[variant]} !important;
`;

const GridItemUL = styled.ul``;
