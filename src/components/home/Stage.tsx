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
    height: 75vh;
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
    font-size: ${({ theme }) => theme.fontSizes.stage.headlineTop.fontSize};
    line-height: ${({ theme }) => theme.fontSizes.stage.headlineTop.lineHeight};
    font-weight: ${({ theme }) => theme.fontSizes.stage.headlineTop.fontWeight};
    color: ${({ theme }) => theme.palette.white};
    margin: 5px 0;
`;

const StageHeadlineMain = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.stage.headlineMain.fontSize};
    line-height: ${({ theme }) =>
        theme.fontSizes.stage.headlineMain.lineHeight};
    font-weight: ${({ theme }) =>
        theme.fontSizes.stage.headlineMain.fontWeight};
    color: ${({ theme }) => theme.palette.white};
    margin: 5px 0 5px -3px;
`;

const StageParagraph = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.stage.paragraph.fontSize};
    line-height: ${({ theme }) => theme.fontSizes.stage.paragraph.lineHeight};
    font-weight: ${({ theme }) => theme.fontSizes.stage.paragraph.fontWeight};
    color: ${({ theme }) => theme.palette.white};
    max-width: 450px;
`;

const StageButton = styled.button`
    font-size: ${({ theme }) => theme.fontSizes.stage.button.fontSize};
    line-height: ${({ theme }) => theme.fontSizes.stage.button.lineHeight};
    font-weight: ${({ theme }) => theme.fontSizes.stage.button.fontWeight};
    background: ${({ theme }) => theme.palette.blue};
    border-radius: 44px;
    padding: 18px 30px;
    text-transform: uppercase;
    width: 300px;
    border: none;
    margin-top: 30px;
`;
