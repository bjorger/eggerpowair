import React from "react";
import styled from "styled-components";
import Logo from "assets/eggerpowair-logo.png";
import { Link, NavLink } from "react-router-dom";
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
                        <HeaderNavLink style={{ margin: 0 }} activecolor={theme} to="/">
                            <StyledLogo src={Logo} alt="" />
                        </HeaderNavLink>
                        <NavContainer>
                            <HeaderNavLink activecolor={theme} to="/">
                                über uns
                            </HeaderNavLink>
                            <HeaderNavLink activecolor={theme} to="/projects">
                                Projekte
                            </HeaderNavLink>
                            <HeaderNavLink activecolor={theme} to="/team">
                                Team
                            </HeaderNavLink>
                            <HeaderNavLink activecolor={theme} to="/news">
                                News
                            </HeaderNavLink>
                            <Button bordervariant={theme} textcolor="white" variant="dark" to="/contact">
                                Kontakt
                            </Button>
                        </NavContainer>
                    </HeaderContent>
                </HeaderContainer>
            </BrowserView>
            <MobileView>
                <MobileLink to="/">
                    <StyledLogo src={Logo} alt="" />
                </MobileLink>
                <Menu
                    right
                    styles={Object.assign(mobileMenuTheme, {
                        bmBurgerBars: {
                            background: theme === "blue" ? "#47BCC7" : "#FB993C",
                        },
                    })}
                    pageWrapId="page-wrap"
                    outerContainerId="outer-container"
                >
                    <HeaderNavLink activecolor={theme} to="/">
                        über uns
                    </HeaderNavLink>
                    <HeaderNavLink activecolor={theme} to="/projects">
                        Projekte
                    </HeaderNavLink>
                    <HeaderNavLink activecolor={theme} to="/team">
                        Team
                    </HeaderNavLink>
                    <HeaderNavLink activecolor={theme} to="/news">
                        News
                    </HeaderNavLink>
                    <HeaderNavLink activecolor={theme} to="/coc">
                        Code of Conduct
                    </HeaderNavLink>
                    <HeaderNavLink activecolor={theme} to="/agb">
                        AGB
                    </HeaderNavLink>
                    <HeaderNavLink activecolor={theme} to="/impressum">
                        Impressum
                    </HeaderNavLink>
                    <Button bordervariant={theme} textcolor="white" variant="dark" to="/contact">
                        Kontakt
                    </Button>
                    <img style={{ marginTop: "20px" }} src={Logo} alt="EggerpowAir" />
                </Menu>
            </MobileView>
        </>
    );
};

export default Header;

interface HeaderNavLinkProps {
    activecolor: Variants;
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
    justify-content: space-between;
    position: relative;
`;

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const MobileLink = styled(Link)`
    position: absolute;
    z-index: 1000;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
`;

const HeaderNavLink = styled(NavLink)<HeaderNavLinkProps>`
    ${({ theme }) => theme.fonts.header.link};

    margin: 0 40px 0 0;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme, color }) => (color ? theme.palette[color] : theme.palette.white)};

    &.active {
        color: ${({ theme, activecolor: activeColor }) => theme.palette[activeColor]};
    }

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        margin: 0 20px;
        text-decoration: none;
        text-transform: uppercase;
        color: ${({ theme, color }) => (color ? theme.palette[color] : theme.palette.white)};
    }
`;

const StyledLogo = styled.img`
    position: absolute;
    z-index: 1000;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        position: relative;
        width: 200px;
        left: 0;
        transform: translateX(0);
    }
`;
