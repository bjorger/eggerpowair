import React from "react";
import { PageWrap } from "components/page";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import styled from "styled-components";
import { Button } from "components/components.sc";
import { useAppSelector } from "redux/hooks";

const TruthInEngineering: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <PageWrap variant="dark" paddingMobile="30px 0" padding="0 0 50px 0">
            <HeadlineContainer>
                <Headline>
                    <Eyebrow textColor="white">Truth in Engineering</Eyebrow>
                    <HeadlineMain color="white">PowAir macht's vor</HeadlineMain>
                </Headline>
                <CustomButton bordervariant={theme} textcolor="white" variant="dark" to="/contact">
                    Kontakt
                </CustomButton>
            </HeadlineContainer>
            <VideoContainer>
                <Video title="youtube-1" src="https://www.youtube.com/embed/1G0P8L4t-Wo"></Video>
            </VideoContainer>
        </PageWrap>
    );
};

export default TruthInEngineering;

export const HeadlineContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const VideoContainer = styled.div`
    margin: 20px 0;
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
`;

export const Video = styled.iframe`
    border-radius: 32px;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const CustomButton = styled(Button)`
    display: none;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        display: block;
    }
`;
