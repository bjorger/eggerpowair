import React from "react";
import { PageWrap } from "components/page";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import { HeadlineContainer, Video, VideoContainer } from "./TruthInEngineering";

const PassionDriven: React.FC = () => {
    return (
        <PageWrap variant="dark" paddingMobile="30px 0" padding="50px 0 0 0" margin="0">
            <HeadlineContainer>
                <Headline>
                    <Eyebrow textColor="white">Wir arbeiten mit Leidenschaft</Eyebrow>
                    <HeadlineMain color="white">PowAir is in the Air</HeadlineMain>
                </Headline>
            </HeadlineContainer>
            <VideoContainer>
                <Video title="youtube" src="https://www.youtube.com/embed/rqGfzrmkVSo"></Video>
            </VideoContainer>
        </PageWrap>
    );
};

export default PassionDriven;
