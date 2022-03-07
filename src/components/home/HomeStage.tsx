import React from "react";
import styled from "styled-components";
import { ReactComponent as PowairPartyBusBlue } from "assets/car-blue.svg";
import { ReactComponent as PowairPartyBusOrange } from "assets/car-orange.svg";
import { useAppSelector } from "redux/hooks";
import { ThemeToggle } from "components/themeToggle";
import { Variants } from "components/components.sc";
import { Button } from "components/components.sc";

const Stage: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <Container>
            <Content>
                <Gradient color={theme} />
                <StageTextContainer>
                    <Eyebrow>Professional. Innovative. Reliable.</Eyebrow>
                    <HeadlineMain>
                        Exceptional <br />
                        Service Exceeding
                        <br />
                        Expectations
                    </HeadlineMain>
                    <StageParagraph>
                        Our civil and structural team is committed to providing sustainable, creative & efficient engineering solutions for our
                        communities
                    </StageParagraph>
                    <Button bordervariant={theme} textcolor="white" to="/contact" variant={theme}>
                        jetzt kontaktieren
                    </Button>
                </StageTextContainer>
                {theme === "orange" ? <PartyBusOrange /> : <PartyBusBlue />}
                <ThemeToggleContainer>
                    <ThemeToggle />
                </ThemeToggleContainer>
            </Content>
        </Container>
    );
};

export default Stage;

interface GradientProps {
    color: Variants;
}

const Container = styled.div`
    display: grid;
    background: ${({ theme }) => theme.palette.dark};
    padding: 120px 0 30px 0;
    grid-template-columns: repeat(24, 1fr);

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        padding: 100px 0;
        grid-template-columns: repeat(24, 1fr);
        height: 75vh;
    }
`;

const Content = styled.div`
    grid-column: 2 / span 22;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        grid-column: 3 / span 20;
        position: relative;
    }
`;

const PartyBusBlue = styled(PowairPartyBusBlue)`
    display: none;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 60%;
    }
`;

const PartyBusOrange = styled(PowairPartyBusOrange)`
    display: none;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 60%;
    }
`;

const Gradient = styled.div<GradientProps>`
    display: none;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        background: ${({ theme, color }) => theme.palette[color]};
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
    ${({ theme }) => theme.fonts.paragraph};
    color: ${({ theme }) => theme.palette.white};
    max-width: 450px;
    margin: 30px 0;
`;

const ThemeToggleContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    color: ${({ theme }) => theme.palette.white};
    justify-content: center;
    padding-top: 30px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        position: absolute;
        bottom: -50px;
    }
`;
