import React from "react";
import styled from "styled-components";
import { useAppSelector } from "redux/hooks";

interface EyebrowProps {
    textColor: "white" | "black" | "orange" | "blue";
}

const Eyebrow: React.FC<EyebrowProps> = ({ children, textColor }) => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <EyebrowContainer>
            <Gradient variant={theme} />
            <EyebrowText color={textColor}>{children}</EyebrowText>
        </EyebrowContainer>
    );
};

export default Eyebrow;

interface EyebrowFontProps {
    color: "white" | "black" | "orange" | "blue";
}

interface GradientProps {
    variant: "orange" | "blue";
}

const Gradient = styled.div<GradientProps>`
    width: 50px;
    border: ${({ variant, theme }) =>
        variant === "orange"
            ? `1px solid ${theme.palette.orange}`
            : `1px solid ${theme.palette.blue}`};
`;

const EyebrowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const EyebrowText = styled.h2<EyebrowFontProps>`
    ${({ theme }) => theme.fonts.headline.eyebrow};

    text-transform: uppercase;
    margin-left: 10px;
    color: ${({ color, theme }) => theme.palette[color]};
`;
