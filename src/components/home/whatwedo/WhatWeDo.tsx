import React from "react";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import { PageWrap } from "components/page";
import { ItemProps, Grid, GridItem } from "components/grid";
import { useAppSelector } from "redux/hooks";
import { BrowserView, MobileView, Variants } from "components/Components.sc";
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
            description: "Unsere Reinigungsmethoden sind universell einsetzbar und das in Bestzeit und daher kostensparend.",
        },
        {
            number: "02",
            title: "Genial umweltfreundlich",
            description: "Für unsere Trockenreinigungsverfahren werden zu 100% umweltfreundlich Stoffe eingesetzt.",
        },
        {
            number: "03",
            title: "Mobil in ganz Europa",
            description:
                "Egger PowAir Cleaning reinigt in ganz Europa, 24/7. Anruf oder E-Mail genügt: 00800-2538 64 64 (kostenfrei aus ganz Europa) oder office@eggerpowair.com.",
        },
        {
            number: "04",
            title: "Technik-Profi-Reinigung",
            description:
                "Für unsere Reinigungsmethoden kommen modernste Strahlmittel zum Einsatz: keimfreie, trockene, ölfreie Druckluft, kalte Trockendruckluft, Trockeneispellets, PowAir Glasspearls und PowAir Granulate. ",
        },
        {
            number: "05",
            title: "Für uns ist kein Auftrag zu klein...",
            description:
                "Von der Briefmarke, über Treppen-, oder Fassadenreinigung bis hin zu Kraftwerken und Lebensmittelproduktionen reinigen wir alles professionell und rückstandslos.",
        },
        {
            number: "06",
            title: "Schulung & Support",
            description:
                "Wir bieten unsere Reinigungssysteme zum Leasing oder Kauf an. Wir schulen nach Bedarf in Ihrem Unternehmen den richtigen Umgang mit den Geräten für die Reinigung.",
        },
    ];

    return (
        <PageWrap variant="white">
            <Headline>
                <Eyebrow textColor="black">Was uns auszeichnet</Eyebrow>
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
                            key={`${item.number}_${item.title}`}
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
                    {whatWeDoItems.map((item, index) => (
                        <SwiperSlide key={`${item.number}_${item.title}_mobile`}>
                            <MobileSlidecontainer>
                                <GridItem
                                    boxShadowVariant="dark"
                                    backgroundVariant="white"
                                    headlineVariant="black"
                                    numberVariant={theme}
                                    paragraphVariant="black"
                                    item={item}
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
