import React from "react";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import PageWrap from "components/pageWrap";
import styled from "styled-components";

import { ReactComponent as Map } from "assets/Map.svg";
import { ReactComponent as Pins } from "assets/Pins.svg";
import { ColoredSpan } from "./../components.sc";
import { Button } from "./../components.sc";

const WhereWeWork: React.FC = () => {
    return (
        <PageWrap variant="light" hideOnMobile={true}>
            <Headline>
                <Eyebrow textColor="black" variant="orange">
                    Where we work
                </Eyebrow>
                <HeadlineMain>
                    Mobil in ganz EU-Europa.{" "}
                    <ColoredSpan variant="orange">24/7</ColoredSpan>
                </HeadlineMain>
                <AbsoluteButton
                    bordervariant="orange"
                    variant="white"
                    textcolor="black"
                    to="/"
                >
                    Jetzt kontaktieren
                </AbsoluteButton>
                <MapContainer>
                    <StyledMap />
                    <StyledPins />
                </MapContainer>
            </Headline>
        </PageWrap>
    );
};

export default WhereWeWork;

const MapContainer = styled.div`
    position: relative;
    display: none;
    pointer-events: none;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        padding: 100px 0;
        display: block;
        min-height: 70vh;
    }
`;

const StyledPins = styled(Pins)`
    position: absolute;
    right: 240px;
    bottom: 180px;
`;

const StyledMap = styled(Map)`
    position: absolute;
    right: 100px;
    top: -75px;
`;

const AbsoluteButton = styled(Button)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 300px;
`;
