import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "assets/eggerpowair-logo.svg";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <StyledLogo />
                <NavContainer>
                    <HeaderLink blueText={true} to="/">
                        über uns
                    </HeaderLink>
                    <HeaderLink to="/">Services</HeaderLink>
                    <HeaderLink to="/">Projekte</HeaderLink>
                    <HeaderLink to="/">Team</HeaderLink>
                    <HeaderLink to="/">Blog</HeaderLink>
                    <ContactButton to="/">Kontakt</ContactButton>
                </NavContainer>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;

interface HeaderLinkProps {
    blueText?: boolean;
}

const HeaderContainer = styled.header`
    height: 160px;
    background: ${({ theme }) => theme.palette.main};
    display: grid;
    grid-template-columns: repeat(24, 1fr);
`;

const HeaderContent = styled.div`
    grid-column: 3 / span 20;
    display: flex;
    flex-direction: row;
    justify-content: end;
    position: relative;
`;

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const HeaderLink = styled(Link)<HeaderLinkProps>`
    margin-left: 20px;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme, blueText }) =>
        blueText ? theme.palette.blue : theme.palette.white};
    font-size: ${({ theme }) => theme.fontSizes.header.link.fontSize};
    line-height: ${({ theme }) => theme.fontSizes.header.link.lineHeight};
`;

const StyledLogo = styled(Logo)`
    position: absolute;
    left: 0;
`;

const ContactButton = styled(Link)`
    border: ${({ theme }) => `1px solid ${theme.palette.blue}`};
    border-radius: 54px;
    padding: 18px 30px;
    background: ${({ theme }) => theme.palette.main};
    text-decoration: none;
    color: ${({ theme }) => theme.palette.white};
    margin-left: 20px;
`;
