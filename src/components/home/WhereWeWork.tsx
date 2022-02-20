import React from "react";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import PageWrap from "components/pageWrap";
import styled from "styled-components";

import { ReactComponent as Map } from "assets/Map.svg";
import { ReactComponent as Pins } from "assets/Pins.svg";
import { ColoredSpan } from "./../components.sc";

const WhereWeWork: React.FC = () => {
    return (
        <PageWrap variant="light">
            <Headline>
                <Eyebrow textColor="black" variant="orange">
                    Where we work
                </Eyebrow>
                <HeadlineMain>
                    Mobil in ganz EU-Europa.{" "}
                    <ColoredSpan variant="orange">24/7</ColoredSpan>
                </HeadlineMain>
                <Button>Jetzt kontaktieren</Button>
                <MapContainer>
                    <StyledMap />
                    <StyledPins />
                </MapContainer>
            </Headline>
        </PageWrap>
    );
};

export default WhereWeWork;

const Button = styled.button`
    position: absolute;
    bottom: 0;
    left: 0;

    ${({ theme }) => theme.fonts.button};
    border: ${({ theme }) => `2px solid ${theme.palette.orange}`};
    background: transparent;
    border-radius: 44px;
    padding: 18px 30px;
    width: 100%;
    text-transform: uppercase;
    margin-top: 15px;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        width: 300px;
        margin-top: 30px;
    }
`;

const MapContainer = styled.div`
    position: relative;
    display: none;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        padding: 100px 0;
        min-height: 100vh;
        display: block;
    }
`;

const StyledPins = styled(Pins)`
    position: absolute;
    right: 140px;
    bottom: 340px;
`;

const StyledMap = styled(Map)`
    position: absolute;
    right: 0;
`;
