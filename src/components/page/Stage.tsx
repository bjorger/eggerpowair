import React from "react";
import styled from "styled-components";
import PowairPartyBusBlue from "assets/car-blue.png";
import PowairPartyBusOrange from "assets/car-orange.png";
import { useAppSelector } from "redux/hooks";
import { BrowserView, MobileView, Variants } from "components/Components.sc";

import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

SwiperCore.use([Autoplay]);

interface StageProps {
    eyebrow: string;
    title: string;
    hidePartyBus?: boolean;
    customImage?: string;
    hideSwipeOnMobile?: boolean;
}

const Stage: React.FC<StageProps> = ({ eyebrow, title, hidePartyBus, customImage, hideSwipeOnMobile }) => {
    const theme = useAppSelector((state) => state.themeToggle.color);
    const image = customImage ? customImage : theme === "orange" ? PowairPartyBusOrange : PowairPartyBusBlue;

    return (
        <Container isBusHidden={hidePartyBus}>
            <Content>
                <BrowserView>
                    <Gradient color={theme} />
                    <StageTextContainer>
                        <Eyebrow>{eyebrow}</Eyebrow>
                        <HeadlineMain>{title}</HeadlineMain>
                    </StageTextContainer>
                    {!hidePartyBus && <PartyBus alt="Eggerpowair Bus" src={image} />}
                </BrowserView>
                <MobileView>
                    {hideSwipeOnMobile ? (
                        <StageTextContainer style={{ marginTop: "50px" }}>
                            <Eyebrow>{eyebrow}</Eyebrow>
                            <HeadlineMain>{title}</HeadlineMain>
                        </StageTextContainer>
                    ) : (
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
                                <StageTextContainer style={{ marginTop: "50px" }}>
                                    <Eyebrow>{eyebrow}</Eyebrow>
                                    <HeadlineMain>{title}</HeadlineMain>
                                </StageTextContainer>
                            </SwiperSlide>
                            <SwiperSlide>
                                <PartyBus alt="Eggerpowair Bus" src={image} />
                            </SwiperSlide>
                        </CustomSwiper>
                    )}
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
    margin-top: 0px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        position: absolute;
        width: 70%;
        right: -150px;
        top: -150px;
        pointer-events: none;
        display: block;
    }
`;

interface ContainerProps {
    isBusHidden?: boolean;
}

const Container = styled.div<ContainerProps>`
    display: grid;
    background: ${({ theme }) => theme.palette.dark};
    padding: 120px 0 0 0;
    grid-template-columns: repeat(24, 1fr);

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        padding: 75px 0;
        height: ${({ isBusHidden }) => (isBusHidden ? "100px" : "30vh")};
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
`;

interface CustomSwiperProps {
    variant: Variants;
}

const CustomSwiper = styled(Swiper)<CustomSwiperProps>`
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
        padding: 0 0 30px 0;
    }
`;
