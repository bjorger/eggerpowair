import React from "react";
import styled from "styled-components";
import Logo from "assets/eggerpowair-logo.png";
import { Link } from "react-router-dom";
import { elastic as Menu } from "react-burger-menu";
import mobileMenuTheme from "./MobileMenuTheme";

const Header: React.FC = () => {
    return (
        <>
            <BrowserView>
                <HeaderContainer>
                    <HeaderContent>
                        <StyledLogo src={Logo} alt="" />
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
            </BrowserView>
            <MobileView>
                <StyledLogo src={Logo} alt="" />
                <Menu
                    right
                    styles={mobileMenuTheme}
                    pageWrapId="page-wrap"
                    outerContainerId="outer-container"
                >
                    <HeaderLink blueText={true} to="/">
                        über uns
                    </HeaderLink>
                    <HeaderLink to="/">Services</HeaderLink>
                    <HeaderLink to="/">Projekte</HeaderLink>
                    <HeaderLink to="/">Team</HeaderLink>
                    <HeaderLink to="/">Blog</HeaderLink>
                    <ContactButton to="/">Kontakt</ContactButton>
                </Menu>
            </MobileView>
        </>
    );
};

export default Header;

interface HeaderLinkProps {
    blueText?: boolean;
}

const BrowserView = styled.div`
    display: none;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        display: block;
    }
`;

const MobileView = styled.div`
    display: block;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        display: none;
    }
`;

const HeaderContainer = styled.header`
    height: 160px;
    background: ${({ theme }) => theme.palette.dark};
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
    ${({ theme }) => theme.fonts.header.link};

    margin-left: 20px;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme, blueText }) =>
        blueText ? theme.palette.blue : theme.palette.white};
`;

const StyledLogo = styled.img`
    position: absolute;
    z-index: 1000;
    left: 0;
    width: 100px;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        width: auto;
    }
`;

const ContactButton = styled(Link)`
    border: ${({ theme }) => `1px solid ${theme.palette.blue}`};
    border-radius: 54px;
    padding: 18px 30px;
    background: ${({ theme }) => theme.palette.dark};
    text-decoration: none;
    color: ${({ theme }) => theme.palette.white};
    margin-left: 20px;
    text-align: center;
`;
