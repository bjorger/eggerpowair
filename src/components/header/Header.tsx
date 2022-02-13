import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
    return <HeaderContainer></HeaderContainer>;
};

export default Header;

const HeaderContainer = styled.header`
    height: 160px;
    background: ${({ theme }) => theme.palette.main};
`;
