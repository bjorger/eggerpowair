import React from "react";
import styled from "styled-components";
import { BrowserView, MobileView, Variants } from "components/components.sc";

export interface ItemProps {
    number: string;
    title: string;
    description: string;
}

interface GridItemProps {
    item: ItemProps;
    numberVariant: Variants;
    headlineVariant: Variants;
    paragraphVariant: Variants;
    backgroundVariant: "dark" | "white";
    boxShadowVariant: "dark" | "white";
}

const GridItem: React.FC<GridItemProps> = ({ item, numberVariant, headlineVariant, paragraphVariant, backgroundVariant, boxShadowVariant }) => {
    return (
        <ItemContainer boxShadowVariant={boxShadowVariant} backgroundVariant={backgroundVariant} key={item.number}>
            <BrowserView>
                <Number variant={numberVariant}>{item.number}</Number>
                <Headline variant={headlineVariant}>{item.title}</Headline>
                <Description variant={paragraphVariant}>{item.description}</Description>
            </BrowserView>
            <MobileView>
                <HeadlineContainer>
                    <Number variant={numberVariant}>{item.number}</Number>
                    <Headline variant={headlineVariant}>{item.title}</Headline>
                </HeadlineContainer>
                <Description variant={paragraphVariant}>{item.description}</Description>
            </MobileView>
        </ItemContainer>
    );
};

export default GridItem;

interface ContainerProps {
    backgroundVariant: "dark" | "white";
    boxShadowVariant: "dark" | "white";
}

interface ComponentProps {
    variant: Variants;
}

const ItemContainer = styled.div<ContainerProps>`
    padding: 20px;
    max-width: 75%;
    margin-left: 10px;
    border-radius: 10px;
    box-shadow: ${({ theme, boxShadowVariant }) =>
        boxShadowVariant === "dark" ? `5px 5px 10px rgba(0, 0, 0, 0.2)` : `5px 5px 27px ${theme.palette[boxShadowVariant]}`};
    background: ${({ backgroundVariant, theme }) => theme.palette[backgroundVariant]};
    max-height: 280px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        padding: 20px 30px;
        border-radius: 36px;
        width: 300px;
        max-height: 280px;
        box-shadow: ${({ theme, boxShadowVariant }) =>
            boxShadowVariant === "dark" ? `5px 5px 27px rgba(0, 0, 0, 0.2)` : `5px 5px 27px ${theme.palette[boxShadowVariant]}`};
    }
`;

const HeadlineContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Number = styled.h1<ComponentProps>`
    ${({ theme }) => theme.fonts.gridItem.number};
    color: ${({ theme, variant }) => theme.palette[variant]};
    margin: 10px 10px 10px 0;
    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        padding: 0;
    }
`;

const Headline = styled.h2<ComponentProps>`
    font-size: ${({ theme }) => theme.fonts.h2};
    color: ${({ theme, variant }) => theme.palette[variant]};
`;

const Description = styled.p<ComponentProps>`
    ${({ theme }) => theme.fonts.paragraph};
    color: ${({ theme, variant }) => theme.palette[variant]};
`;
