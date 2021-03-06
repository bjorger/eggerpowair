import React from "react";
import { PageWrap } from "components/page";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import { useAppSelector } from "redux/hooks";
import styled from "styled-components";
import HotPowair from "assets/hotpowair.mp4";
import ColdPowair from "assets/coldpowair.mp4";

const BuildingTheFuture: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <PageWrap variant="white">
            <div>
                <Headline>
                    <Eyebrow textColor="black">Technologie </Eyebrow>
                    <HeadlineMain>{theme === "blue" ? "Cold PowAir" : "Hot PowAir"}</HeadlineMain>
                </Headline>
                <Video src={theme === "blue" ? ColdPowair : HotPowair} autoPlay loop muted />
            </div>
        </PageWrap>
    );
};

export default BuildingTheFuture;

const Video = styled.video`
    width: 100%;
    margin-top: 20px;
`;
