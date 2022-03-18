import styled from "styled-components";

export const Grid = styled.div`
    padding-top: 50px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 54px;
    column-gap: 49px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;
