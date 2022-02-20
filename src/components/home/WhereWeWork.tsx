import React from "react";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import PageWrap from "components/pageWrap";
import styled from "styled-components";

import { ReactComponent as Map } from "assets/Map.svg";
import { ReactComponent as Pins } from "assets/Pins.svg";

const WhereWeWork: React.FC = () => {
    return (
        <PageWrap variant="light">
            <Headline>
                <Eyebrow color="orange">Where we work</Eyebrow>
                <HeadlineMain>
                    Mobil in ganz EU-Europa. <OrangeSpan>24/7</OrangeSpan>
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

const OrangeSpan = styled.span`
    color: ${({ theme }) => theme.palette.orange};
`;

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
`;

const StyledPins = styled(Pins)`
    position: absolute;
    right: 140px;
    bottom: -735px;
`;

const StyledMap = styled(Map)`
    position: absolute;
    right: 0;
`;
