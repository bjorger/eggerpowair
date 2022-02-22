import React from "react";
import styled from "styled-components";
import { Variants } from "components/components.sc";

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

const GridItem: React.FC<GridItemProps> = ({
    item,
    numberVariant,
    headlineVariant,
    paragraphVariant,
    backgroundVariant,
    boxShadowVariant,
}) => {
    return (
        <ItemContainer
            boxShadowVariant={boxShadowVariant}
            backgroundVariant={backgroundVariant}
            key={item.number}
        >
            <Number variant={numberVariant}>{item.number}</Number>
            <Headline variant={headlineVariant}>{item.title}</Headline>
            <Description variant={paragraphVariant}>
                {item.description}
            </Description>
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
    padding: 40px 50px;
    border-radius: 36px;
    box-shadow: ${({ theme, boxShadowVariant }) =>
        boxShadowVariant === "dark"
            ? `5px 5px 27px rgba(0, 0, 0, 0.2)`
            : `5px 5px 27px ${theme.palette[boxShadowVariant]}`};
    background: ${({ backgroundVariant, theme }) =>
        theme.palette[backgroundVariant]};
`;

const Number = styled.h1<ComponentProps>`
    ${({ theme }) => theme.fonts.gridItem.number};

    color: ${({ theme, variant }) => theme.palette[variant]};
`;

const Headline = styled.h2<ComponentProps>`
    font-size: ${({ theme }) => theme.fonts.gridItem.headline};
    color: ${({ theme, variant }) => theme.palette[variant]};
`;

const Description = styled.p<ComponentProps>`
    ${({ theme }) => theme.fonts.paragraph};
    color: ${({ theme, variant }) => theme.palette[variant]};
`;
