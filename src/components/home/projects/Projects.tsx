import React from "react";
import styled from "styled-components";
import { Headline, HeadlineMain, Eyebrow } from "components/headline";
import ProjectGridItem from "./ProjectGridItem";
import { PageWrap } from "components/page";

import "swiper/css";
import "swiper/css/pagination";

import AluminiumErzeugung from "assets/applications/AluminiumErzeugung.webp";
import BetonUndZementwerke from "assets/applications/BetonUndZementwerke.webp";
import Biomassekraftwerke from "assets/applications/Biomassekraftwerke.webp";
import ChemischeIndustrie from "assets/applications/ChemischeIndustrie.webp";
import Holzerzeugnisse from "assets/applications/Holzerzeugnisse.webp";
import LebensmittelIndustrie from "assets/applications/LebensmittelIndustrie.webp";
import MaschinenUndAnlagenbau from "assets/applications/MaschinenUndAnlagenbau.webp";
import Müllverbrennungsanlage from "assets/applications/Müllverbrennungsanlagen.webp";
import PapierUndKartonVerpackungsIndustrie from "assets/applications/PapierUndKartonVerpackungsindustrie.webp";
import PelletsTrocknerabgasreinigung from "assets/applications/PelletsTrocknerabgasreinigung.webp";
import Schaltschrankreinigung from "assets/applications/Schaltschrankreinigung.webp";
import Wasserkraftwerke from "assets/applications/Wasserkraftwerke.webp";
import Ziegelwerke from "assets/applications/Ziegelwerke.webp";
import Zugtechnik from "assets/applications/Zugtechnik.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { BrowserView, MobileView, Variants } from "components/Components.sc";
import { useAppSelector } from "redux/hooks";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { NewsCategories } from "api/storyblok";

SwiperCore.use([Autoplay]);

const projects = [
    [
        {
            img: AluminiumErzeugung,
            headline: "Aluminium Erzeugung",
            category: "aluminium",
        },
        {
            img: BetonUndZementwerke,
            headline: "Beton und Zementwerke",
            category: "cement",
        },
        {
            img: Biomassekraftwerke,
            headline: "Biomassekraftwerke",
            category: "biopowerplants",
        },
        {
            img: ChemischeIndustrie,
            headline: "Chemische Industrie",
            category: "waste",
        },
    ],
    [
        {
            img: Holzerzeugnisse,
            headline: "Holzerzeugnisse",
            category: "wood",
        },
        {
            img: LebensmittelIndustrie,
            headline: "Lebensmittel Industrie",
            category: "food",
        },
        {
            img: MaschinenUndAnlagenbau,
            headline: "Maschinen und Anlagenbau",
            category: "mechanical",
        },
        {
            img: Müllverbrennungsanlage,
            headline: "Müllverbrennungsanlagen",
            category: "incinerators",
        },
    ],
    [
        {
            img: PapierUndKartonVerpackungsIndustrie,
            headline: "Papier-Verpackungsindustrie",
            category: "paper",
        },
        {
            img: PelletsTrocknerabgasreinigung,
            headline: "Pellets-Trocknerabgasreinigung",
            category: "gas",
        },
        {
            img: Schaltschrankreinigung,
            headline: "Schaltschrankreinigung",
            category: "cabinet",
        },
        {
            img: Wasserkraftwerke,
            headline: "Wasserkraftwerke",
            category: "waterpowerplants",
        },
    ],
    [
        {
            img: Ziegelwerke,
            headline: "Ziegelwerke",
            category: "brick",
        },
        {
            img: Zugtechnik,
            headline: "Zugtechnik",
            category: "trains",
        },
    ],
];

const Projects: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <PageWrap variant="dark">
            <Headline>
                <Eyebrow textColor="white">Unsere Einsatzgebiete</Eyebrow>
                <HeadlineMain color="white">Anwendungen</HeadlineMain>
                <BrowserView>
                    <CustomSwiper
                        variant={theme}
                        pagination={{
                            dynamicBullets: false,
                        }}
                        modules={[Pagination]}
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 10000,
                        }}
                    >
                        {projects.map((items) => (
                            <SwiperSlide>
                                <ProjectGrid>
                                    {items.map((item, index) => (
                                        <ProjectGridItem
                                            category={item.category}
                                            image={item.img}
                                            headline={item.headline}
                                            key={`${item.headline}_${index}`}
                                        />
                                    ))}
                                </ProjectGrid>
                            </SwiperSlide>
                        ))}
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
                        {projects.map((items) =>
                            items.map((item, index) => (
                                <SwiperSlide>
                                    <ProjectGrid>
                                        <ProjectGridItem
                                            category={item.category}
                                            image={item.img}
                                            headline={item.headline}
                                            key={`${item.headline}_${index}`}
                                        />
                                    </ProjectGrid>
                                </SwiperSlide>
                            )),
                        )}
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
