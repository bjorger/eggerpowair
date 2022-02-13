import React from "react";
import styled from "styled-components";

const Headline: React.FC = ({ children }) => {
    return <HeadlineContainer>{children}</HeadlineContainer>;
};

export default Headline;

const HeadlineContainer = styled.div`
    grid-column: 3 / span 20;
`;

export const HeadlineMain = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.headline.main.fontSize};
    line-height: ${({ theme }) => theme.fontSizes.headline.main.lineHeight};
    font-weight: ${({ theme }) => theme.fontSizes.headline.main.fontWeight};
    margin: 0;
`;
