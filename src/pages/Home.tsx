import React from "react";
import {
    Stage,
    WhatWeDo,
    Projects,
    WhereWeWork,
    WhyChooseUs,
    TruthInEngineering,
    BuildingTheFuture,
} from "components/home";

import ThemeToggle from "components/themeToggle";
import styled from "styled-components";
import { useAppSelector } from "redux/hooks";
import { Variants } from "components/components.sc";

const Home: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <main style={{ position: "relative" }} id="page-wrap">
            <Stage />
            <WhatWeDo />
            <Projects />
            <WhereWeWork />
            <WhyChooseUs />
            <TruthInEngineering />
            <BuildingTheFuture />
            <StickyThemeToggleContainer borderColor={theme}>
                <ThemeToggle />
            </StickyThemeToggleContainer>
        </main>
    );
};

export default Home;

interface StickyThemeToggleContainerProps {
    borderColor: Variants;
}

const StickyThemeToggleContainer = styled.div<StickyThemeToggleContainerProps>`
    z-index: 1000;
    position: fixed;
    padding: 20px;
    border-radius: 32px;
    background-color: ${({ theme }) => theme.palette.dark};
    color: ${({ theme }) => theme.palette.white};
    border: 1px solid;
    border-color: ${({ theme, borderColor }) => theme.palette[borderColor]};
    right: 5px;
    bottom: 30px;

    display: none;
    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        display: block;
    }
`;
