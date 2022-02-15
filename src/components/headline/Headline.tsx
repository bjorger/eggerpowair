import React from "react";
import styled from "styled-components";

const Headline: React.FC = ({ children }) => {
    return <HeadlineContainer>{children}</HeadlineContainer>;
};

export default Headline;

const HeadlineContainer = styled.div`
    grid-column: 3 / span 20;
`;

interface HeadlineMainProps {
    color?: "white" | "black";
}

export const HeadlineMain = styled.h1<HeadlineMainProps>`
    ${({ theme }) => theme.fonts.headline.main};

    margin: 0;
    color: ${({ theme, color }) =>
        color === "white" ? theme.palette.white : theme.palette.black};
`;
