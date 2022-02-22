import React from "react";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import PageWrap from "components/pageWrap";
import { ItemProps, Grid, GridItem } from "components/Grid";
import { useAppSelector } from "redux/hooks";

const WhatWeDo: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    const whatWeDoItems: ItemProps[] = [
        {
            number: "01",
            title: "Schnell & kostensparend",
            description:
                "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
        {
            number: "02",
            title: "Genial umweltfreundlich",
            description:
                "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
        {
            number: "03",
            title: "Mobil in ganz Europa",
            description:
                "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
        {
            number: "04",
            title: "Technik-Profi-Reinigung",
            description:
                "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
        {
            number: "05",
            title: "Für uns ist kein Auftrag zu klein...",
            description:
                "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
        {
            number: "06",
            title: "Schulung & Support",
            description:
                "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
    ];

    return (
        <PageWrap variant="light">
            <Headline>
                <Eyebrow textColor="black">What we do</Eyebrow>
                <HeadlineMain>
                    6 gute Gründe für Egger <br />
                    PowAir Cleaning:
                </HeadlineMain>
            </Headline>
            <Grid>
                {whatWeDoItems.map((item) => (
                    <GridItem
                        boxShadowVariant="dark"
                        backgroundVariant="white"
                        headlineVariant="black"
                        numberVariant={theme}
                        paragraphVariant="black"
                        item={item}
                        key={item.number}
                    />
                ))}
            </Grid>
        </PageWrap>
    );
};

export default WhatWeDo;
