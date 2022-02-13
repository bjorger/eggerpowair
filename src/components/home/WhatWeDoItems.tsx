import React from "react";
import styled from "styled-components";

export interface WhatWeDoItem {
    number: string;
    title: string;
    description: string;
}

interface WhatWeDoItemsProps {
    items: WhatWeDoItem[];
}

const WhatWeDoItems: React.FC<WhatWeDoItemsProps> = ({ items }) => {
    return (
        <WhatWeDoGrid>
            {items.map((item) => (
                <WhatWeDoItemContainer>
                    <Number>{item.number}</Number>
                    <Headline>{item.title}</Headline>
                    <Description>{item.description}</Description>
                </WhatWeDoItemContainer>
            ))}
        </WhatWeDoGrid>
    );
};

export default WhatWeDoItems;

const WhatWeDoGrid = styled.div`
    padding-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 54px;
    column-gap: 49px;
`;

const WhatWeDoItemContainer = styled.div`
    padding: 40px;
    border-radius: 36px;
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.2);
`;

const Number = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.whatWeDo.number.fontSize};
    line-height: ${({ theme }) => theme.fontSizes.whatWeDo.number.lineHeight};
    font-weight: ${({ theme }) => theme.fontSizes.whatWeDo.number.fontWeight};
    color: ${({ theme }) => theme.palette.orange};
`;

const Headline = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.whatWeDo.headline.fontSize};
    line-height: ${({ theme }) => theme.fontSizes.whatWeDo.headline.lineHeight};
    font-weight: ${({ theme }) => theme.fontSizes.whatWeDo.headline.fontWeight};
`;

const Description = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.whatWeDo.description.fontSize};
    line-height: ${({ theme }) =>
        theme.fontSizes.whatWeDo.description.lineHeight};
    font-weight: ${({ theme }) =>
        theme.fontSizes.whatWeDo.description.fontWeight};
`;
