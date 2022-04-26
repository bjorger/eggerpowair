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
    gridArea?: string;
    hideOnMobile?: boolean;
}

const Footer: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <PageWrap borderTop={true} minHeight="30" variant="dark" padding="0 0 30px 0" paddingMobile="0">
            <Container>
                <InnerContainer gridArea="logo" flexOrderMobile="1">
                    <StyledLogo src={Logo} alt="" />
                </InnerContainer>
                <InnerContainer gridArea="contact" flexOrderMobile="3">
                    <FooterHeadline>Kontakt</FooterHeadline>
                    <ContactParagraph>
                        +43- 12345 - 67890 <br />
                        +43- 12345 - 67891 <br />
                        Europazentrale <br />
                        Egger PowAir Cleaning GmbH <br /> Pebering-Straß 21 <br />
                        5301 Eugendorf <br />
                        Salzburg Österreich
                    </ContactParagraph>
                </InnerContainer>
                <InnerContainer hideOnMobile={true}>
                    <FooterHeadline>Menü</FooterHeadline>
                    <FooterUL color={theme}>
                        <li>
                            <FooterLink to="/">Über uns</FooterLink>
                        </li>
                        <li>
                            <FooterLink to="/projects">Projekte</FooterLink>
                        </li>
                        <li>
                            <FooterLink to="/team">Team</FooterLink>
                        </li>
                        <li>
                            <FooterLink to="/news">News</FooterLink>
                        </li>
                        <li>
                            <FooterLink to="/contact">Kontakt</FooterLink>
                        </li>
                    </FooterUL>
                </InnerContainer>
                <LogoContainer variant={theme}>
                    <a href="https://www.facebook.com/EggerPowAir/" target="_blank" rel="noreferrer">
                        <Facebook />
                    </a>
                    <a href="https://www.instagram.com/egger_powair_cleaning_gmbh" target="_blank" rel="noreferrer">
                        <Instagram />
                    </a>
                    <a href="https://www.linkedin.com/company/egger-powair-cleaning-gmbh/" target="_blank" rel="noreferrer">
                        <LinkedIn />
                    </a>
                </LogoContainer>
            </Container>
            <FooterBottom>
                <InnerContainer>Copyright 2022</InnerContainer>
                <InnerContainer>
                    <FooterBottomContainer>
                        <FooterLink to="/agb">AGB</FooterLink>
                        <FooterLink to="/coc">Code of Conduct</FooterLink>
                        <FooterLink to="/impressum">Impressum</FooterLink>
                    </FooterBottomContainer>
                </InnerContainer>
                <InnerContainer></InnerContainer>
            </FooterBottom>
        </PageWrap>
    );
};

export default Footer;

const Container = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 30px;
    display: grid;
    grid-template-areas: "logo social social" "logo contact contact";
    place-items: start;

    ${({ theme }) => theme.borderBottom};

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const StyledLogo = styled.img`
    width: 70px;
    grid-area: "logo";

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        width: 200px;
    }
`;

const InnerContainer = styled.div<InnerContainerProps>`
    order: ${({ flexOrderMobile }) => (flexOrderMobile ? flexOrderMobile : "unset")};
    display: ${({ hideOnMobile }) => (hideOnMobile ? "none" : "block")};
    grid-area: ${({ gridArea }) => (gridArea ? gridArea : "none")};

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        display: block;
        order: unset;
    }
`;

const FooterHeadline = styled.h2`
    ${({ theme }) => theme.fonts.h2};
    color: ${({ theme }) => theme.palette.white};
    margin-top: 0px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        margin-top: 50px;
    }
`;

const LogoContainer = styled.div<LogoContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    order: 2;
    grid-area: "logo";
    margin-top: 10px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        order: unset;
        place-self: center;
        margin-top: 0;
    }

    svg {
        color: ${({ theme, variant }) => theme.palette[variant]};
        padding: 10px;
        font-size: 30px;
        cursor: pointer;

        &:first-child {
            padding-left: 0;
        }
    }
`;

const ContactParagraph = styled.p`
    ${({ theme }) => theme.fonts.footer.paragraph};
    color: ${({ theme }) => theme.palette.white};

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        order: unset;
    }
`;

const FooterLink = styled(Link)`
    ${({ theme }) => theme.fonts.header.link};
    color: ${({ theme }) => theme.palette.white};
    text-transform: uppercase;
    text-decoration: none;
`;

interface FooterULProps {
    color: Variants;
}

const FooterUL = styled.ul<FooterULProps>`
    padding-left: 20px;
    li {
        padding: 4px 0;
        &::marker {
            color: ${({ theme, color }) => theme.palette[color]};
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
