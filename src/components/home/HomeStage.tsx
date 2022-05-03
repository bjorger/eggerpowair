import React from "react";
import styled from "styled-components";
import PowairPartyBusBlue from "assets/car-blue.png";
import PowairPartyBusOrange from "assets/car-orange.png";
import { useAppSelector } from "redux/hooks";
import { ThemeToggle } from "components/themeToggle";
import { BrowserView, MobileView, Paragraph, Variants } from "components/Components.sc";
import { Button } from "components/Components.sc";

import "swiper/css";
import "swiper/css/autoplay";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Stage: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <Container>
            <Content>
                <Gradient color={theme} />
                <BrowserView>
                    <StageTextContainer>
                        <Eyebrow>Mobil in ganz Europa. 24/7.</Eyebrow>
                        <HeadlineMain>
                            {theme === "orange"
                                ? "Sandstrahlen war gestern- Egger Cold PowAir Cleaning ist heute Stand der Technik"
                                : "Exceptional Service Exceeding Expectations"}
                        </HeadlineMain>
                        <StageParagraph color="white">
                            {theme === "orange"
                                ? "Abrasiv reinigen mit heißer Druckluft und PowAir-Granulate. Ohne Sand, ohne Staub, 100% Umweltfreundlich."
                                : "COLD PowAir Reinigung mit kalter Druckluft und sonst nichts. Non abrasiv, schnell und effizient, ohne Sekundär-Abfälle!"}
                        </StageParagraph>
                        <Button bordervariant={theme} textcolor="white" to="/contact" variant={theme}>
                            jetzt kontaktieren
                        </Button>
                    </StageTextContainer>
                    <PartyBus alt="Eggerpowair Bus" src={theme === "orange" ? PowairPartyBusOrange : PowairPartyBusBlue} />
                    <ThemeToggleContainer>
                        <ThemeToggle />
                    </ThemeToggleContainer>
                </BrowserView>
                <MobileView>
                    <CustomSwiper
                        variant={theme}
                        autoplay={{
                            delay: 2000,
                        }}
                        pagination={{
                            dynamicBullets: false,
                        }}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <StageTextContainer>
                                <Eyebrow>Professional. Innovative. Reliable.</Eyebrow>
                                <HeadlineMain>
                                    Exceptional <br />
                                    Service Exceeding
                                    <br />
                                    Expectations
                                </HeadlineMain>
                                <Button style={{ marginTop: "20px" }} bordervariant={theme} textcolor="white" to="/contact" variant={theme}>
                                    jetzt kontaktieren
                                </Button>
                            </StageTextContainer>
                        </SwiperSlide>
                        <SwiperSlide>
                            <PartyBus alt="Eggerpowair Bus" src={theme === "orange" ? PowairPartyBusOrange : PowairPartyBusBlue} />
                        </SwiperSlide>
                    </CustomSwiper>
                    <ThemeToggleContainer>
                        <ThemeToggle />
                    </ThemeToggleContainer>
                </MobileView>
            </Content>
        </Container>
    );
};

export default Stage;

interface GradientProps {
    color: Variants;
}

const PartyBus = styled.img`
    width: 100%;
    margin-top: 50px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        position: absolute;
        width: 70%;
        right: -150px;
        bottom: 0px;
        pointer-events: none;
        display: block;
    }
`;

const Container = styled.div`
    display: grid;
    background: ${({ theme }) => theme.palette.dark};
    padding: 120px 0 30px 0;
    grid-template-columns: repeat(24, 1fr);

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        padding: 100px 0;
        grid-template-columns: repeat(24, 1fr);
        overflow: hidden;
    }
`;

const Content = styled.div`
    grid-column: 2 / span 22;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        grid-column: 3 / span 20;
        position: relative;
    }
`;

const Gradient = styled.div<GradientProps>`
    display: none;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        background: ${({ theme, color }) => theme.palette[color]};
        height: 1px;
        width: 200px;
        position: absolute;
        top: 15px;
        left: -210px;
        display: block;
    }
`;

const StageTextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Eyebrow = styled.h2`
    ${({ theme }) => theme.fonts.headline.eyebrow};

    color: ${({ theme }) => theme.palette.white};
    margin: 5px 0;
`;

const HeadlineMain = styled.h1`
    ${({ theme }) => theme.fonts.headline.main};
    color: ${({ theme }) => theme.palette.white};
    margin: 5px 0 5px -3px;
    max-width: 50%;
`;

const StageParagraph = styled(Paragraph)`
    max-width: 450px;
    margin: 30px 0;
`;

const ThemeToggleContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    color: ${({ theme }) => theme.palette.white};
    justify-content: center;
    padding-top: 30px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        position: absolute;
        bottom: -50px;
    }
`;
interface CustomSwiperProps {
    variant: Variants;
    padding?: string;
    margin?: string;
}

export const CustomSwiper = styled(Swiper)<CustomSwiperProps>`
    position: relative;

    .swiper-pagination-bullet-active {
        background-color: ${({ theme, variant }) => theme.palette[variant]} !important;
    }

    .swiper-pagination-bullet {
        border: 2px solid;
        border-color: ${({ theme, variant }) => theme.palette[variant]};
        background-color: transparent;
    }

    .swiper-slide {
        padding: ${({ padding }) => (padding ? padding : "0 0 30px 0")};
        margin-bottom: ${({ margin }) => (margin ? margin : "20px")};
    }
`;
