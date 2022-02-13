import React from "react";
import styled from "styled-components";

interface HeadlineTopProps {
    text: string;
    orange?: boolean;
}

const HeadlineTop: React.FC<HeadlineTopProps> = ({ text, orange }) => {
    return (
        <HeadlineContainer>
            <Gradient orange={orange} />
            <HeadlineTopContent>{text}</HeadlineTopContent>
        </HeadlineContainer>
    );
};

export default HeadlineTop;

interface GradientProps {
    orange?: boolean;
}

const Gradient = styled.div<GradientProps>`
    width: 50px;
    border: ${({ orange, theme }) =>
        orange
            ? `1px solid ${theme.palette.orange}`
            : `1px solid ${theme.palette.blue}`};
`;

const HeadlineContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const HeadlineTopContent = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.headline.top.fontSize};
    line-height: ${({ theme }) => theme.fontSizes.headline.top.lineHeight};
    font-weight: ${({ theme }) => theme.fontSizes.headline.top.fontWeight};
    text-transform: uppercase;
    margin-left: 10px;
`;
