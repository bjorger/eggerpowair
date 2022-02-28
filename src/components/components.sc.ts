import styled from "styled-components";
import { Link } from "react-router-dom";
interface ContainerProps {
    variant: "dark" | "light";
    hideOnMobile?: boolean;
    minHeight?: string;
    padding?: string;
    paddingMobile?: string;
}

interface SpanProps {
    variant: "orange" | "blue";
}

interface ButtonProps {
    variant: Variants;
    textcolor: Variants;
    bordervariant: Variants;
}

export type Variants = "orange" | "blue" | "white" | "black" | "light" | "dark";

export const Container = styled.div<ContainerProps>`
    display: ${({ hideOnMobile }) => (hideOnMobile ? "none" : "grid")};
    grid-template-columns: repeat(24, 1fr);
    padding: ${({ paddingMobile }) => (paddingMobile ? paddingMobile : `50px 0`)};
    background-color: ${({ variant, theme }) => (variant === "dark" ? theme.palette.dark : theme.palette.white)};
    min-height: 20vh;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        padding: ${({ padding }) => (padding ? padding : `80px 0`)};
        min-height: ${({ minHeight }) => (minHeight ? `${minHeight}vh` : `50vh`)};
        display: grid;
    }
`;

export const Content = styled.div`
    position: relative;
    grid-column: 2 / span 22;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        grid-column: 4 / span 17;
    }
`;

export const ColoredSpan = styled.span<SpanProps>`
    color: ${({ theme, variant }) => theme.palette[variant]};
`;

export const Button = styled(Link)<ButtonProps>`
    ${({ theme }) => theme.fonts.button};
    border: ${({ theme, bordervariant }) => `2px solid ${theme.palette[bordervariant]}`};
    background: ${({ theme, variant }) => theme.palette[variant]};
    color: ${({ theme, textcolor }) => theme.palette[textcolor]};
    border-radius: 44px;
    padding: 18px 30px;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    width: auto;
    transition: 0.5s ease background;

    &:hover {
        background: ${({ theme, bordervariant }) => theme.palette[bordervariant]};
    }

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        max-width: 300px;
    }
`;
