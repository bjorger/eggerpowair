import React from "react";
import styled from "styled-components";
import { Variants } from "components/Components.sc";
import { useAppSelector } from "redux/hooks";
import { ArrowBackIos } from "@mui/icons-material";

interface MobileTileProps {
    number: string;
    headline: string;
    paragraph: string;
}

const MobileTile: React.FC<MobileTileProps> = ({ number, headline, paragraph }) => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <Container>
            <HeadlineContainer>
                <Number variant={theme}>{number}</Number>
                <Headline>{headline}</Headline>
                <CustomArrow variant={theme} />
            </HeadlineContainer>
            <CollapseToggle type="checkbox" defaultChecked={true} />
            <ParagraphContainer>
                <Paragraph>{paragraph}</Paragraph>
            </ParagraphContainer>
        </Container>
    );
};

export default MobileTile;

interface ComponentProps {
    variant: Variants;
}

export const Container = styled.label``;

export const HeadlineContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px 0;
`;

export const ParagraphContainer = styled.div`
    max-height: 120px;
    transition: 1s ease max-height;
    overflow: hidden;
    padding: 5px 20px 0;
`;

const CollapseToggle = styled.input`
    display: none;

    &:checked + ${ParagraphContainer} {
        max-height: 0px;
    }
`;

const Number = styled.h1<ComponentProps>`
    ${({ theme }) => theme.fonts.mobileTile.number};
    margin-right: 20px;
    color: ${({ theme, variant }) => theme.palette[variant]};
`;

const Headline = styled.h2`
    ${({ theme }) => theme.fonts.mobileTile.headline};
`;

const Paragraph = styled.p`
    ${({ theme }) => theme.fonts.mobileTile.paragraph};
`;

const CustomArrow = styled(ArrowBackIos)<ComponentProps>`
    transform: rotate(-90deg);
    font-size: 15px !important;
    color: ${({ theme, variant }) => theme.palette[variant]};
    margin-bottom: 5px;
`;
