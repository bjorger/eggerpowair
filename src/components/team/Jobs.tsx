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
        // document is the rich text object you receive from Storyblok,
        // in the form { type: "doc", content: [ ... ] }
        return <Paragraph>{render(document)}</Paragraph>;
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
                    <JobDesc>
                        <Headline>
                            <Eyebrow textColor="white">Powair jobs</Eyebrow>
                            <HeadlineMain color="white">
                                Mitarbeiter*in für <ColoredSpan variant={theme}>{job.title}</ColoredSpan> m / w / d
                            </HeadlineMain>
                        </Headline>
                        {RichText(job.description)}
                    </JobDesc>
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
    flex-direction: column;
    padding: 50px 0;

    &:not(:last-child) {
        ${({ theme }) => theme.borderBottom};
    }

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const JobDesc = styled.div`
    max-width: 600px;
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
`;

const SkillContainer = styled.div`
    background: #232527;
    border: 1px solid #232527;
    box-shadow: 5px 5px 27px rgba(255, 254, 254, 0.45);
    border-radius: 36px;
    padding: 20px;
    width: 200px;
    margin-top: 50px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        padding: 40px;
        width: 300px;
        border: none;
        box-shadow: none;
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

const GridItemUL = styled.ul``;
