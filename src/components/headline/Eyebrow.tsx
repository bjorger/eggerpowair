import React from "react";
import styled from "styled-components";

interface EyebrowProps {
    color?: "orange" | "blue";
}

const Eyebrow: React.FC<EyebrowProps> = ({ children, color }) => {
    return (
        <EyebrowContainer>
            <Gradient color={color} />
            <EyebrowText color={color}>{children}</EyebrowText>
        </EyebrowContainer>
    );
};

export default Eyebrow;

interface ColorProps {
    color?: "orange" | "blue";
}

const Gradient = styled.div<ColorProps>`
    width: 50px;
    border: ${({ color, theme }) =>
        color === "orange"
            ? `1px solid ${theme.palette.orange}`
            : `1px solid ${theme.palette.blue}`};
`;

const EyebrowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const EyebrowText = styled.h2<ColorProps>`
    ${({ theme }) => theme.fonts.headline.eyebrow};

    text-transform: uppercase;
    margin-left: 10px;
    color: ${({ color, theme }) =>
        color === "orange" ? theme.palette.orange : theme.palette.blue};
`;
