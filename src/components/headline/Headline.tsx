import React from "react";
import styled from "styled-components";
import { Variants } from "components/Components.sc";

const Headline: React.FC = ({ children }) => {
    return <HeadlineContainer>{children}</HeadlineContainer>;
};

export default Headline;

const HeadlineContainer = styled.div`
    grid-column: 4 / span 20;
`;

interface HeadlineMainProps {
    color?: Variants;
    mobileColor?: Variants;
}

export const HeadlineMain = styled.h1<HeadlineMainProps>`
    ${({ theme }) => theme.fonts.headline.main};

    margin: 0;
    color: ${({ theme, color, mobileColor }) => (mobileColor ? theme.palette[mobileColor] : color ? theme.palette[color] : theme.palette.black)};

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        color: ${({ theme, color }) => (color ? theme.palette[color] : theme.palette.black)};
    }
`;
