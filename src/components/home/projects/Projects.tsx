import React from "react";
import styled from "styled-components";
import { Headline, HeadlineMain, Eyebrow } from "components/headline";
import DummyImage from "assets/Egger-PowAir.jpg";
import ProjectGridItem from "./ProjectGridItem";
import PageWrap from "./../../pageWrap/PageWrap";
import { ThemeToggle } from "components/themeToggle";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Variants } from "components/components.sc";
import { useAppSelector } from "redux/hooks";

const DummyData = [
    {
        img: DummyImage,
        headline: "Baumaschinen",
        description: "100 Sunrise Ct Hamel, Minnesota(MN)",
    },
    {
        img: DummyImage,
        headline: "Baumaschinen",
        description: "100 Sunrise Ct Hamel, Minnesota(MN)",
    },
    {
        img: DummyImage,
        headline: "Baumaschinen",
        description: "100 Sunrise Ct Hamel, Minnesota(MN)",
    },
    {
        img: DummyImage,
        headline: "Baumaschinen",
        description: "100 Sunrise Ct Hamel, Minnesota(MN)",
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
                <HeadlineMain color="white">
                    Reinigung mit Trocken-Druck-Luft
                </HeadlineMain>
                <CustomSwiper
                    variant={theme}
                    pagination={{
                        dynamicBullets: false,
                    }}
                    modules={[Pagination]}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <ProjectGrid>
                            {DummyData.map((item, index) => (
                                <ProjectGridItem
                                    image={item.img}
                                    headline={item.headline}
                                    description={item.description}
                                    key={item.headline + index.toString()}
                                />
                            ))}
                        </ProjectGrid>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectGrid>
                            {DummyData.map((item, index) => (
                                <ProjectGridItem
                                    image={item.img}
                                    headline={item.headline}
                                    description={item.description}
                                    key={item.headline + index.toString()}
                                />
                            ))}
                        </ProjectGrid>
                    </SwiperSlide>
                </CustomSwiper>
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

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const CustomSwiper = styled(Swiper)<CustomSwiperProps>`
    position: relative;

    .swiper-pagination-bullet-active {
        background-color: ${({ theme, variant }) =>
            theme.palette[variant]} !important;
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
