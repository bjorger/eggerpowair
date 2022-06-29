import React from "react";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import { PageWrap } from "components/page";
import { ItemProps, GridItem } from "components/grid";
import { useAppSelector } from "redux/hooks";
import "swiper/css";
import "swiper/css/pagination";

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
            <Grid>
                {whatWeDoItems.map((item, index) => (
                    <GridItem
                        boxShadowVariant="dark"
                        backgroundVariant="white"
                        headlineVariant="black"
                        numberVariant={theme}
                        paragraphVariant="black"
                        item={item}
                        key={`${item.number}_${item.title}`}
                        delay={index + 1}
                    />
                ))}
            </Grid>
        </PageWrap>
    );
};

export default WhatWeDo;

const Grid = styled.div`
    padding-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 54px;
    column-gap: 0px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;
