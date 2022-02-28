import React from "react";
import PageWrap from "components/pageWrap";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import styled from "styled-components";
import { ColoredSpan, MobileView, BrowserView } from "../../components.sc";
import { Grid, GridItem, ItemProps } from "components/grid";
import { useAppSelector } from "redux/hooks";
import { Variants } from "components/components.sc";

const WhyChooseUs: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    const whyChooseUsItems: ItemProps[] = [
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
    ];

    return (
        <PageWrap variant="dark" mobileVariant="white">
            <Grid>
                <GridItemWrap>
                    <Headline>
                        <Eyebrow textColor="white" textColorMobile="black">
                            Why choose us
                        </Eyebrow>
                        <HeadlineMain color="white" mobileColor="black">
                            <ColoredSpan variant={theme}>Designing</ColoredSpan> Future with Excellence
                        </HeadlineMain>
                    </Headline>
                    <BrowserView>
                        <GridItemUL>
                            <GridItemParagraph variant={theme}>
                                Egger PowAir Cleaning reinigt Industrieanlagen, Produktionsanlagen, Maschinen, Brücken und Bauten mobil in ganz
                                Europa.
                            </GridItemParagraph>
                        </GridItemUL>
                    </BrowserView>
                </GridItemWrap>
                <BrowserView>
                    {whyChooseUsItems.map((item) => (
                        <GridItem
                            backgroundVariant="dark"
                            boxShadowVariant="white"
                            headlineVariant="white"
                            numberVariant="light"
                            paragraphVariant="white"
                            item={item}
                            key={item.title}
                        />
                    ))}
                </BrowserView>
                <MobileView></MobileView>
            </Grid>
        </PageWrap>
    );
};

export default WhyChooseUs;

const GridItemWrap = styled.div``;

interface GrdItemParagraphProps {
    variant: Variants;
}

const GridItemParagraph = styled.li<GrdItemParagraphProps>`
    ${({ theme }) => theme.fonts.paragraph};
    color: ${({ theme }) => theme.palette.white};
    &::marker {
        color: ${({ theme, variant }) => theme.palette[variant]};
        font-size: 20px;
    }
`;

const GridItemUL = styled.ul`
    padding: 30px 50px;
`;
