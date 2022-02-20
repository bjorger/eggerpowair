import styled from "styled-components";

interface ContainerProps {
    variant: "dark" | "light";
}

interface SpanProps {
    variant: "orange" | "blue";
}

export const Container = styled.div<ContainerProps>`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    padding: 50px 0;
    background-color: ${({ variant, theme }) =>
        variant === "dark" ? theme.palette.dark : theme.palette.white};
    min-height: 20vh;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        padding: 100px 0;
        min-height: 100vh;
    }
`;

export const Content = styled.div`
    position: relative;
    grid-column: 2 / span 22;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        grid-column: 4 / span 17;
    }
`;

export const ColoredSpan = styled.span<SpanProps>`
    color: ${({ theme }) => theme.palette.orange};
`;

export type Variants = "orange" | "blue" | "white" | "black" | "light";
