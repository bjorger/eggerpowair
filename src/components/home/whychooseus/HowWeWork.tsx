import React from "react";
import { PageWrap } from "components/page";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import styled from "styled-components";
import { ColoredSpan, MobileView, BrowserView } from "../../Components.sc";
import { Grid, GridItem, ItemProps } from "components/grid";
import { useAppSelector } from "redux/hooks";
import { Variants } from "components/Components.sc";
import MobileTile, { ParagraphContainer, Container as MobileTileContainer } from "./MobileTile";

const WhyChooseUs: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    const coldPowAir: ItemProps[] = [
        {
            number: "01",
            title: "Reinigung mit Hilfe von Trockeneispellets",
            description: "Zur Reinigung von härteren Verschmutzungen wie Beton oder Bitumen und zur Entfernung von dicken Lackschichten.",
        },
        {
            number: "02",
            title: "Reinigung mit Egger PowAir Glasspearls",
            description: "Zum reinigen, glätten, verdichten und veredeln von Oberflächen, kommen unsere mit Swarovski-Glaspearls zum Einsatz.",
        },
        {
            number: "03",
            title: "Reinigung mit Egger PowAir Granulaten",
            description: "Für besonders widerstandsfähige Verhärtungen eignen sich unsere PowAir Granulate hervorragend.",
        },
    ];

    const hotPowAir: ItemProps[] = [
        {
            number: "01",
            title: "Reinigung mit Egger PowAir Glasspearls",
            description: "Zum reinigen, glätten, verdichten und veredeln von Oberflächen, kommen unsere mit Swarovski-Glaspearls zum Einsatz.",
        },
        {
            number: "02",
            title: "Reinigung mit Egger PowAir Granulaten",
            description: "Für besonders widerstandsfähige Verhärtungen eignen sich unsere PowAir Granulate hervorragend.",
        },
        {
            number: "03",
            title: "HOT PowAir Steam",
            description: "Mit Trockendampf können wir gezielt Oberflächen von Fetten und Ölen befreien.",
        },
    ];

    const itemsToShow: ItemProps[] = theme === "orange" ? hotPowAir : coldPowAir;

    return (
        <PageWrap variant="dark" mobileVariant="white" paddingMobile="20px 0 50px 0">
            <BrowserView>
                <>
                    <Headline>
                        <Eyebrow textColor="white" textColorMobile="black">
                            Wie wir arbeiten
                        </Eyebrow>
                        <HeadlineMain color="white" mobileColor="black">
                            <ColoredSpan variant={theme}>Unsere</ColoredSpan> Reinigungsmethoden
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
                </>
                <Grid>
                    {itemsToShow.map((item) => (
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
                </Grid>
            </BrowserView>
            <MobileView>
                <Headline>
                    <Eyebrow textColor="black">Why choose us</Eyebrow>
                    <HeadlineMain color="black">
                        <ColoredSpan variant={theme}>Designing</ColoredSpan> Future with Excellence
                    </HeadlineMain>
                </Headline>
                <MobileContainer>
                    {itemsToShow.map((item) => (
                        <MobileTile key={item.number} number={item.number} headline={item.title} paragraph={item.description} />
                    ))}
                </MobileContainer>
            </MobileView>
        </PageWrap>
    );
};

export default WhyChooseUs;

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
    padding: 15px 0 0 30px;
    max-width: 500px;
`;

const MobileContainer = styled.div`
    border-radius: 15px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    margin-top: 50px;

    ${MobileTileContainer}:not(:last-of-type) ${ParagraphContainer} {
        ${({ theme }) => theme.borderBottom};
    }
`;
