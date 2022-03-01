import React from "react";
import { PageWrap } from "components/page";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import styled from "styled-components";
import { Button } from "components/components.sc";
import { useAppSelector } from "redux/hooks";

const TruthInEngineering: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <PageWrap variant="dark">
            <HeadlineContainer>
                <Headline>
                    <Eyebrow textColor="white">Truth in Engineering</Eyebrow>
                    <HeadlineMain color="white">PowAir is in the Air</HeadlineMain>
                </Headline>
                <Button bordervariant={theme} textcolor="white" variant="dark" to="/">
                    Kontakt
                </Button>
            </HeadlineContainer>
            <VideoContainer>
                <Video title="youtube" src="https://www.youtube.com/embed/tgbNymZ7vqY"></Video>
            </VideoContainer>
            <Paragraph>
                Leo in vitae turpis massa sed elementum tempus egestas sed. Sed sed risus pretium quam vulputate dignissim suspendisse in. Placerat
                orci nulla pellentesque dignissim enim. Tortor pretium viverra suspendisse potenti nullam augue. Vestibulum lorem sed risus ultricies
                tristique nulla. Erat velit scelerisque in dictum non consectetur
            </Paragraph>
        </PageWrap>
    );
};

export default TruthInEngineering;

const HeadlineContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const VideoContainer = styled.div`
    margin: 80px 0;
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
`;

const Video = styled.iframe`
    border-radius: 32px;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Paragraph = styled.p`
    ${({ theme }) => theme.fonts.paragraph};
    color: ${({ theme }) => theme.palette.white};
    width: 100%;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        width: 50%;
    }
`;
