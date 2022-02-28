import React from "react";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import PageWrap from "components/pageWrap";
import styled from "styled-components";

import { ReactComponent as Map } from "assets/Map.svg";
import { ReactComponent as Pins } from "assets/Pins.svg";
import { ColoredSpan } from "./../components.sc";
import { Button } from "./../components.sc";
import { useAppSelector } from "redux/hooks";

const WhereWeWork: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <PageWrap variant="white" hideOnMobile={true}>
            <Headline>
                <Eyebrow textColor="black">Where we work</Eyebrow>
                <HeadlineMain>
                    Mobil in ganz EU-Europa.
                    <ColoredSpan variant={theme}>24/7</ColoredSpan>
                </HeadlineMain>
                <AbsoluteButton bordervariant={theme} variant="white" textcolor="black" to="/">
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

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        padding: 100px 0;
        display: block;
        min-height: 70vh;
    }
`;

const StyledPins = styled(Pins)`
    position: absolute;
    right: 240px;
    bottom: 225px;
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
