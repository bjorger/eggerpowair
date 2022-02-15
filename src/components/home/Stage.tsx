import React from "react";
import styled from "styled-components";
import { ReactComponent as PowairPartyBus } from "assets/car-blue.svg";

const Stage: React.FC = () => {
    return (
        <StageContainer>
            <StageContent>
                <Gradient />
                <StageTextContainer>
                    <StageHeadlineTop>
                        Professional. Innovative. Reliable.
                    </StageHeadlineTop>
                    <StageHeadlineMain>
                        Exceptional <br />
                        Service Exceeding
                        <br />
                        Expectations
                    </StageHeadlineMain>
                    <StageParagraph>
                        Our civil and structural team is committed to providing
                        sustainable, creative & efficient engineering solutions
                        for our communities
                    </StageParagraph>
                    <StageButton>jetzt kontaktieren</StageButton>
                </StageTextContainer>
                <PartyBus />
            </StageContent>
        </StageContainer>
    );
};

export default Stage;

interface GradientProps {
    orange?: boolean;
}

const StageContainer = styled.div`
    display: grid;
    padding: 100px 0 50px 0;
    grid-template-columns: repeat(24, 1fr);
    background: ${({ theme }) => theme.palette.main};
    height: 72vh;
`;

const StageContent = styled.div`
    grid-column: 3 / span 20;
    position: relative;
`;

const PartyBus = styled(PowairPartyBus)`
    position: absolute;
    right: 0;
    bottom: 0;
`;

const Gradient = styled.div<GradientProps>`
    background: ${({ theme, orange }) =>
        orange ? theme.palette.orange : theme.palette.blue};
    height: 1px;
    width: 200px;
    position: absolute;
    top: 19px;
    left: -210px;
`;

const StageTextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StageHeadlineTop = styled.h2`
    ${({ theme }) => theme.fonts.headline.eyebrow};

    color: ${({ theme }) => theme.palette.white};
    margin: 5px 0;
`;

const StageHeadlineMain = styled.h1`
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
    text-transform: uppercase;
    width: 300px;
    border: none;
    margin-top: 30px;
`;
