import React from "react";
import styled from "styled-components";
import { ReactComponent as PowairPartyBus } from "assets/car-blue.svg";

const Stage: React.FC = () => {
    return (
        <Container>
            <Content>
                <Gradient />
                <StageTextContainer>
                    <Eyebrow>Professional. Innovative. Reliable.</Eyebrow>
                    <HeadlineMain>
                        Exceptional <br />
                        Service Exceeding
                        <br />
                        Expectations
                    </HeadlineMain>
                    <StageParagraph>
                        Our civil and structural team is committed to providing
                        sustainable, creative & efficient engineering solutions
                        for our communities
                    </StageParagraph>
                    <StageButton>jetzt kontaktieren</StageButton>
                </StageTextContainer>
                <PartyBus />
            </Content>
        </Container>
    );
};

export default Stage;

interface GradientProps {
    orange?: boolean;
}

const Container = styled.div`
    display: grid;
    background: ${({ theme }) => theme.palette.dark};
    padding: 120px 0 70px 0;
    grid-template-columns: repeat(24, 1fr);

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        padding: 100px 0 50px 0;
        grid-template-columns: repeat(24, 1fr);
        height: 75vh;
    }
`;

const Content = styled.div`
    grid-column: 2 / span 22;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        grid-column: 3 / span 20;
        position: relative;
    }
`;

const PartyBus = styled(PowairPartyBus)`
    display: none;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.lg}px`}) {
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 60%;
    }
`;

const Gradient = styled.div<GradientProps>`
    display: none;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        background: ${({ theme, orange }) =>
            orange ? theme.palette.orange : theme.palette.blue};
        height: 1px;
        width: 200px;
        position: absolute;
        top: 19px;
        left: -210px;
        display: block;
    }
`;

const StageTextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Eyebrow = styled.h2`
    ${({ theme }) => theme.fonts.headline.eyebrow};

    color: ${({ theme }) => theme.palette.white};
    margin: 5px 0;
`;

const HeadlineMain = styled.h1`
    ${({ theme }) => theme.fonts.headline.main};

    color: ${({ theme }) => theme.palette.white};
    margin: 5px 0 5px -3px;
`;

const StageParagraph = styled.p`
    font-size: ${({ theme }) => theme.fonts.stage.paragraph};

    color: ${({ theme }) => theme.palette.white};
    max-width: 450px;
`;

const StageButton = styled.button`
    ${({ theme }) => theme.fonts.button};
    background: ${({ theme }) => theme.palette.blue};
    border-radius: 44px;
    padding: 18px 30px;
    width: 100%;
    text-transform: uppercase;
    border: none;
    margin-top: 15px;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        width: 300px;
        margin-top: 30px;
    }
`;
