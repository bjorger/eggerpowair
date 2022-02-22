import React from "react";
import styled from "styled-components";
import Logo from "assets/eggerpowair-logo.png";
import PageWrap from "components/pageWrap";

const Footer: React.FC = () => {
    return (
        <PageWrap minHeight="30" variant="dark" padding="20px 0">
            <Container>
                <StyledLogo src={Logo} alt="" />
                <InnerContainer></InnerContainer>
                <InnerContainer>
                    <FooterHeadline>Kontakt</FooterHeadline>
                </InnerContainer>
                <InnerContainer>
                    <FooterHeadline>Menü</FooterHeadline>
                </InnerContainer>
                <LogoContainer></LogoContainer>
            </Container>
        </PageWrap>
    );
};

export default Footer;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    position: relative;
`;

const StyledLogo = styled.img`
    display: none;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        width: auto;
        position: absolute;
        z-index: 1000;
        left: 0;
        top: -20px;
        display: block;
    }
`;

const InnerContainer = styled.div``;

const FooterHeadline = styled.h2`
    ${({ theme }) => theme.fonts.h2};
    color: ${({ theme }) => theme.palette.white};
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
