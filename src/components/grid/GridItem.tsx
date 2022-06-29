import React from "react";
import styled from "styled-components";
import { Paragraph, Variants } from "components/Components.sc";
import VisibilitySensor from "react-visibility-sensor";

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
    delay: number;
}

const GridItem: React.FC<GridItemProps> = ({
    item,
    delay,
    numberVariant,
    headlineVariant,
    paragraphVariant,
    backgroundVariant,
    boxShadowVariant,
}) => {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    const onChange = () => {
        if (!isVisible) {
            setIsVisible(true);
        }
    };

    return (
        <VisibilitySensor onChange={onChange}>
            <ItemContainer
                delay={delay}
                isVisible={isVisible}
                boxShadowVariant={boxShadowVariant}
                backgroundVariant={backgroundVariant}
                key={item.number}
            >
                <Number variant={numberVariant}>{item.number}</Number>
                <Headline variant={headlineVariant}>{item.title}</Headline>
                <ItemParagraph color={paragraphVariant}>{item.description}</ItemParagraph>
            </ItemContainer>
        </VisibilitySensor>
    );
};

export default GridItem;

interface ContainerProps {
    backgroundVariant: "dark" | "white";
    boxShadowVariant: "dark" | "white";
    delay: number;
    isVisible: boolean;
}

interface ComponentProps {
    variant: Variants;
}

const ItemContainer = styled.div<ContainerProps>`
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: translateY(${({ isVisible }) => (!isVisible ? "50px" : 0)});
    transition: ${({ delay }) => `${delay}s`} ease opacity, ${({ delay }) => `${delay}s`} ease transform;
    padding: 20px 10px;
    margin-left: 10px;
    border-radius: 10px;
    box-shadow: ${({ theme, boxShadowVariant }) =>
        boxShadowVariant === "dark" ? `5px 5px 10px rgba(0, 0, 0, 0.2)` : `5px 5px 27px ${theme.palette[boxShadowVariant]}`};
    background: ${({ backgroundVariant, theme }) => theme.palette[backgroundVariant]};

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        padding: 20px 30px;
        border-radius: 36px;
        width: 400px;
        box-shadow: ${({ theme, boxShadowVariant }) =>
            boxShadowVariant === "dark" ? `5px 5px 27px rgba(0, 0, 0, 0.2)` : `5px 5px 27px ${theme.palette[boxShadowVariant]}`};
    }
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
    ${({ theme }) => theme.fonts.h2};
    color: ${({ theme, variant }) => theme.palette[variant]};
`;

const ItemParagraph = styled(Paragraph)`
    display: none;
    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        display: block;
    }
`;
