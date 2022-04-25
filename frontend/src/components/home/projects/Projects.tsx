import React from "react";
import styled from "styled-components";
import { Headline, HeadlineMain, Eyebrow } from "components/headline";
import ProjectGridItem from "./ProjectGridItem";
import { PageWrap } from "components/page";
import { ThemeToggle } from "components/themeToggle";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { BrowserView, MobileView, Variants } from "components/components.sc";
import { useAppSelector } from "redux/hooks";

import Unterboden from "assets/projects/Unterboden.png";
import Umspannwerke from "assets/projects/Umspannwerke.png";
import Kuehlhaeuser from "assets/projects/Kuehlhaeuser.png";
import Ziegelgewölbe from "assets/projects/Ziegelgewölbe.png";
import Baumaschinen from "assets/projects/Baumaschinen.png";
import Kraftwerksanlagen from "assets/projects/Kraftwerksanlagen.png";
import Steuerungstechnik from "assets/projects/Stuerungstechnik.png";
import Schaltschraenke from "assets/projects/Schaltschränke.png";

const DummyData = [
    {
        img: Unterboden,
        headline: "Unterboden Reinigung",
    },
    {
        img: Umspannwerke,
        headline: "Umspannwerke",
    },
    {
        img: Kuehlhaeuser,
        headline: "Kühlhäuser",
    },
    {
        img: Ziegelgewölbe,
        headline: "Ziegelgewölbe",
    },
    {
        img: Baumaschinen,
        headline: "Baumaschinen",
    },
    {
        img: Kraftwerksanlagen,
        headline: "Kraftwerksanlagen",
    },
    {
        img: Steuerungstechnik,
        headline: "Railjet Steuerungstechnik",
    },
    {
        img: Schaltschraenke,
        headline: "Schaltschränke",
    },
];

const Projects: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <PageWrap variant="dark">
            <Headline>
                <Eyebrow textColor="white">
                    <ThemeToggle />
                </Eyebrow>
                <HeadlineMain color="white">Reinigung mit Trocken-Druck-Luft</HeadlineMain>
                <BrowserView>
                    <CustomSwiper
                        variant={theme}
                        pagination={{
                            dynamicBullets: false,
                        }}
                        modules={[Pagination]}
                        slidesPerView={1}
                        spaceBetween={30}
                    >
                        <SwiperSlide>
                            <ProjectGrid>
                                {DummyData.filter((item, index) => index < 4).map((item, index) => (
                                    <ProjectGridItem image={item.img} headline={item.headline} key={item.headline + index.toString()} />
                                ))}
                            </ProjectGrid>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectGrid>
                                {DummyData.filter((item, index) => index >= 4).map((item, index) => (
                                    <ProjectGridItem image={item.img} headline={item.headline} key={item.headline + index.toString()} />
                                ))}
                            </ProjectGrid>
                        </SwiperSlide>
                    </CustomSwiper>
                </BrowserView>
                <MobileView>
                    <CustomSwiper
                        variant={theme}
                        pagination={{
                            dynamicBullets: false,
                        }}
                        modules={[Pagination]}
                        slidesPerView={1}
                        spaceBetween={30}
                    >
                        {DummyData.map((item, index) => (
                            <SwiperSlide>
                                <ProjectGridItem image={item.img} headline={item.headline} key={item.headline + index.toString() + "mobile"} />
                            </SwiperSlide>
                        ))}
                    </CustomSwiper>
                </MobileView>
            </Headline>
        </PageWrap>
    );
};

export default Projects;

interface CustomSwiperProps {
    variant: Variants;
}

const ProjectGrid = styled.div`
    padding-top: 30px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

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
        padding: 50px 0;
    }
`;