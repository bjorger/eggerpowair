import React from "react";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import { PageWrap } from "components/page";
import { ItemProps, Grid, GridItem } from "components/grid";
import { useAppSelector } from "redux/hooks";
import { BrowserView, MobileView, Variants } from "components/components.sc";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import styled from "styled-components";

const WhatWeDo: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    const whatWeDoItems: ItemProps[] = [
        {
            number: "01",
            title: "Schnell & kostensparend",
            description: "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
        {
            number: "02",
            title: "Genial umweltfreundlich",
            description: "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
        {
            number: "03",
            title: "Mobil in ganz Europa",
            description: "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
        {
            number: "04",
            title: "Technik-Profi-Reinigung",
            description: "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
        {
            number: "05",
            title: "Für uns ist kein Auftrag zu klein...",
            description: "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
        {
            number: "06",
            title: "Schulung & Support",
            description: "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
    ];

    return (
        <PageWrap variant="white">
            <Headline>
                <Eyebrow textColor="black">What we do</Eyebrow>
                <HeadlineMain>
                    6 gute Gründe für Egger <br />
                    PowAir Cleaning:
                </HeadlineMain>
            </Headline>
            <BrowserView>
                <Grid>
                    {whatWeDoItems.map((item) => (
                        <GridItem
                            boxShadowVariant="dark"
                            backgroundVariant="white"
                            headlineVariant="black"
                            numberVariant={theme}
                            paragraphVariant="black"
                            item={item}
                            key={item.number + item.title}
                        />
                    ))}
                </Grid>
            </BrowserView>
            <MobileView>
                <CustomSwiper
                    variant={theme}
                    pagination={{
                        dynamicBullets: false,
                    }}
                    modules={[Pagination]}
                    slidesPerView={"auto"}
                    spaceBetween={30}
                >
                    {whatWeDoItems.map((item) => (
                        <SwiperSlide>
                            <MobileSlidecontainer>
                                <GridItem
                                    boxShadowVariant="dark"
                                    backgroundVariant="white"
                                    headlineVariant="black"
                                    numberVariant={theme}
                                    paragraphVariant="black"
                                    item={item}
                                    key={item.title + item.number}
                                />
                            </MobileSlidecontainer>
                        </SwiperSlide>
                    ))}
                </CustomSwiper>
            </MobileView>
        </PageWrap>
    );
};

export default WhatWeDo;

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
        padding: 50px 0;
    }
`;

const MobileSlidecontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
