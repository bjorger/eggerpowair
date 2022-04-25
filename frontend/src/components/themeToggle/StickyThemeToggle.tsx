import React from "react";
import { Variants } from "components/components.sc";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { toggleOrange, toggleBlue } from "redux/features/themeToggle/themeToggle";

const StickyThemeToggle: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);
    const dispatch = useAppDispatch();

    const toggleTheme = () => {
        if (theme === "blue") {
            dispatch(toggleOrange());
        } else {
            dispatch(toggleBlue());
        }
    };

    return (
        <StickyThemeToggleContainer variant={theme === "blue" ? "orange" : "blue"} onClick={toggleTheme}>
            {theme === "blue" ? "HOT" : "COLD"}
        </StickyThemeToggleContainer>
    );
};

export default StickyThemeToggle;

interface StickyThemeToggleContainerProps {
    variant: Variants;
}

const StickyThemeToggleContainer = styled.div<StickyThemeToggleContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    position: fixed;
    height: 57px;
    width: 57px;
    border-radius: 100%;
    background-color: ${({ theme, variant }) => theme.palette[variant]};
    color: ${({ theme }) => theme.palette.white};
    right: 15px;
    bottom: 30px;
    ${({ theme }) => theme.fonts.button};
    cursor: pointer;
    user-select: none;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        height: 98px;
        width: 98px;
        border-radius: 100%;
        background-color: ${({ theme, variant }) => theme.palette[variant]};
        color: ${({ theme }) => theme.palette.white};
        right: 30px;
    }
`;
