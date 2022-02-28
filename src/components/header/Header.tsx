import React from "react";
import styled from "styled-components";
import Logo from "assets/eggerpowair-logo.png";
import { Link } from "react-router-dom";
import { elastic as Menu } from "react-burger-menu";
import mobileMenuTheme from "./MobileMenuTheme";
import { BrowserView, MobileView, Variants } from "components/components.sc";
import { useAppSelector } from "redux/hooks";
import { Button } from "components/components.sc";

const Header: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <>
            <BrowserView>
                <HeaderContainer>
                    <HeaderContent>
                        <StyledLogo src={Logo} alt="" />
                        <NavContainer>
                            <HeaderLink color={theme} to="/">
                                über uns
                            </HeaderLink>
                            <HeaderLink to="/">Services</HeaderLink>
                            <HeaderLink to="/">Projekte</HeaderLink>
                            <HeaderLink to="/">Team</HeaderLink>
                            <HeaderLink to="/">Blog</HeaderLink>
                            <Button bordervariant={theme} textcolor="white" variant="dark" to="/">
                                Kontakt
                            </Button>
                        </NavContainer>
                    </HeaderContent>
                </HeaderContainer>
            </BrowserView>
            <MobileView>
                <StyledLogo src={Logo} alt="" />
                <Menu right styles={mobileMenuTheme} pageWrapId="page-wrap" outerContainerId="outer-container">
                    <HeaderLink color="blue" to="/">
                        über uns
                    </HeaderLink>
                    <HeaderLink to="/">Services</HeaderLink>
                    <HeaderLink to="/">Projekte</HeaderLink>
                    <HeaderLink to="/">Team</HeaderLink>
                    <HeaderLink to="/">Blog</HeaderLink>
                    <Button bordervariant={theme} textcolor="white" variant="dark" to="/">
                        Kontakt
                    </Button>
                </Menu>
            </MobileView>
        </>
    );
};

export default Header;

interface HeaderLinkProps {
    color?: Variants;
}

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

    margin: 0 20px;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme, color }) => (color ? theme.palette[color] : theme.palette.white)};
`;

const StyledLogo = styled.img`
    position: absolute;
    z-index: 1000;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        width: auto;
        left: 0;
    }
`;
