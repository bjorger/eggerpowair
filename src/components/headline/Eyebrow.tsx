import React from "react";
import styled from "styled-components";
import { useAppSelector } from "redux/hooks";
import { Variants } from "components/Components.sc";

interface EyebrowProps {
    textColor: Variants;
    textColorMobile?: Variants;
}

const Eyebrow: React.FC<EyebrowProps> = ({ children, textColor, textColorMobile }) => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <EyebrowContainer>
            <Gradient variant={theme} />
            <EyebrowText color={textColor} mobileColor={textColorMobile}>
                {children}
            </EyebrowText>
        </EyebrowContainer>
    );
};

export default Eyebrow;

interface EyebrowFontProps {
    color: Variants;
    mobileColor?: Variants;
}

interface GradientProps {
    variant: "orange" | "blue";
}

const Gradient = styled.div<GradientProps>`
    width: 50px;
    border: ${({ variant, theme }) => (variant === "orange" ? `1px solid ${theme.palette.orange}` : `1px solid ${theme.palette.blue}`)};
`;

const EyebrowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const EyebrowText = styled.h2<EyebrowFontProps>`
    ${({ theme }) => theme.fonts.headline.eyebrow};

    text-transform: uppercase;
    margin-left: 30px;
    color: ${({ color, mobileColor, theme }) => (mobileColor ? theme.palette[mobileColor] : theme.palette[color])};

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        color: ${({ color, theme }) => theme.palette[color]};
    }
`;
