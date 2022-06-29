import React from "react";
import { PageWrap } from "components/page";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import { useAppSelector } from "redux/hooks";
import styled from "styled-components";
import HotPowair from "assets/hotpowair.webm";
import ColdPowair from "assets/coldpowair.webm";

const BuildingTheFuture: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <PageWrap variant="white">
            <Headline>
                <Eyebrow textColor="black">Technologie </Eyebrow>
                <HeadlineMain>{theme === "blue" ? "Cold PowAir" : "Hot PowAir"}</HeadlineMain>
            </Headline>
            <Video src={theme === "blue" ? ColdPowair : HotPowair} autoPlay loop />
        </PageWrap>
    );
};

export default BuildingTheFuture;

const Video = styled.video`
    width: 100%;
    margin-top: 20px;
`;
