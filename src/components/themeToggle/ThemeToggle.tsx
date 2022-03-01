import React from "react";
import styled from "styled-components";
import {
    toggleOrange,
    toggleBlue,
} from "redux/features/themeToggle/themeToggle";
import { useAppDispatch } from "redux/hooks";

const ThemeToggle: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <Cold onClick={() => dispatch(toggleBlue())}>Cold Powair</Cold>|
            <Hot onClick={() => dispatch(toggleOrange())}>Hot Powair</Hot>
        </>
    );
};

export default ThemeToggle;

const Hot = styled.span`
    color: ${({ theme }) => theme.palette.orange};
    ${({ theme }) => theme.fonts.button}
    text-transform: uppercase;
    cursor: pointer;
    margin-left: 10px;
`;

const Cold = styled.span`
    color: ${({ theme }) => theme.palette.blue};
    ${({ theme }) => theme.fonts.button}
    text-transform: uppercase;
    cursor: pointer;
    margin-right: 10px;
`;
