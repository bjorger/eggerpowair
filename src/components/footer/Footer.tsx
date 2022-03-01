import React from "react";
import styled from "styled-components";
import Logo from "assets/eggerpowair-logo.png";
import { PageWrap } from "components/page";
import { Link } from "react-router-dom";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { useAppSelector } from "redux/hooks";
import { Variants } from "components/components.sc";

interface LogoContainerProps {
    variant: Variants;
}

interface InnerContainerProps {
    flexOrderMobile?: string;
    hideOnMobile?: boolean;
}

const Footer: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <PageWrap minHeight="30" variant="dark" padding="0 0 30px 0" paddingMobile="0">
            <Container>
                <InnerContainer flexOrderMobile="1">
                    <StyledLogo src={Logo} alt="" />
                </InnerContainer>
                <InnerContainer flexOrderMobile="3">
                    <FooterHeadline>Kontakt</FooterHeadline>
                    <ContactParagraph>
                        +43- 12345 - 67890 <br />
                        +43- 12345 - 67891 <br />
                        Egger PowAir Cleaning GmbH <br /> Pebering-Straß 21 <br />
                        5301 Eugendorf <br />
                        Salzburg Österreich
                    </ContactParagraph>
                </InnerContainer>
                <InnerContainer hideOnMobile={true}>
                    <FooterHeadline>Menü</FooterHeadline>
                    <FooterUL>
                        <li>
                            <FooterLink to="/">Über uns</FooterLink>
                        </li>
                        <li>
                            <FooterLink to="/">Services</FooterLink>
                        </li>
                        <li>
                            <FooterLink to="/">Projekte</FooterLink>
                        </li>
                        <li>
                            <FooterLink to="/">Team</FooterLink>
                        </li>
                        <li>
                            <FooterLink to="/">Blog</FooterLink>
                        </li>
                        <li>
                            <FooterLink to="/">Kontakt</FooterLink>
                        </li>
                    </FooterUL>
                </InnerContainer>
                <LogoContainer variant={theme}>
                    <a href="google.com" target="_blank">
                        <Facebook />
                    </a>
                    <a href="google.com">
                        <Instagram />
                    </a>
                    <a href="google.com">
                        <LinkedIn />
                    </a>
                </LogoContainer>
            </Container>
            <FooterBottom>
                <InnerContainer>Copyright 2022</InnerContainer>
                <InnerContainer>
                    <FooterBottomContainer>
                        <FooterLink to="/">AGB</FooterLink>
                        <FooterLink to="/">Code of Conduct</FooterLink>
                        <FooterLink to="/">Deutsch</FooterLink>
                    </FooterBottomContainer>
                </InnerContainer>
                <InnerContainer></InnerContainer>
            </FooterBottom>
        </PageWrap>
    );
};

export default Footer;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    width: 100%;
    padding-bottom: 30px;

    ${({ theme }) => theme.borderBottom};
`;

const StyledLogo = styled.img`
    width: 70px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        width: 200px;
    }
`;

const InnerContainer = styled.div<InnerContainerProps>`
    order: ${({ flexOrderMobile }) => (flexOrderMobile ? flexOrderMobile : "unset")};
    display: ${({ hideOnMobile }) => (hideOnMobile ? "none" : "block")};
    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        display: block;
        order: unset;
    }
`;

const FooterHeadline = styled.h2`
    ${({ theme }) => theme.fonts.h2};
    color: ${({ theme }) => theme.palette.white};
    margin-top: 20px;
    text-align: right;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        margin-top: 50px;
        text-align: left;
    }
`;

const LogoContainer = styled.div<LogoContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    order: 2;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        order: unset;
    }

    svg {
        color: ${({ theme, variant }) => theme.palette[variant]};
        padding: 10px;
        font-size: 30px;
        cursor: pointer;
    }
`;

const ContactParagraph = styled.p`
    text-align: right;
    ${({ theme }) => theme.fonts.footer.paragraph};
    color: ${({ theme }) => theme.palette.white};
`;

const FooterLink = styled(Link)`
    ${({ theme }) => theme.fonts.header.link};
    color: ${({ theme }) => theme.palette.white};
    text-transform: uppercase;
    text-decoration: none;
`;

const FooterUL = styled.ul`
    padding-left: 20px;
    li {
        padding: 4px 0;
        &::marker {
            color: ${({ theme }) => theme.palette.blue};
        }
    }
`;

const FooterBottom = styled.div`
    display: none;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-top: 20px;
        color: ${({ theme }) => theme.palette.white};
    }
`;

const FooterBottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    a {
        margin: 0 25px;
    }
`;
