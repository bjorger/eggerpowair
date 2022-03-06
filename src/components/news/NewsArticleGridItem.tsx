import React from "react";
import styled from "styled-components";
import { NewsArticleType } from "api/storyblok";
import { useAppSelector } from "redux/hooks";
import { Variants } from "components/components.sc";
import { Link } from "react-router-dom";

interface NewsArticleGridItemProps {
    item: NewsArticleType;
}

const NewsArticleGridItem: React.FC<NewsArticleGridItemProps> = ({ item }) => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <Container>
            <Image imageUrl={item.image.filename} />
            <Headline>{item.headline}</Headline>
            <Date>{item.date}</Date>
            <PreviewText>{item.preview_text}</PreviewText>
            <ContinueReading to={`/news-article?id=${item.id}`} variant={theme}>
                Weiterlesen
            </ContinueReading>
        </Container>
    );
};

export default NewsArticleGridItem;

const Container = styled.div``;

interface ImageProps {
    imageUrl: string;
}

interface ContinueReadingProps {
    variant: Variants;
}

const Image = styled.div<ImageProps>`
    border-radius: 36px;
    width: 400px;
    height: 400px;
    margin-bottom: 10px;
    background: url(${({ imageUrl }) => imageUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Headline = styled.h2`
    ${({ theme }) => theme.fonts.h2}
    margin: 20px 0 10px;
    padding: 0;
`;

const Date = styled.span`
    ${({ theme }) => theme.fonts.paragraph};
    color: ${({ theme }) => theme.palette.grey};
    padding: 0;
    margin: 10px 0;
`;

const PreviewText = styled.p`
    ${({ theme }) => theme.fonts.h2};
    padding: 0;
    margin: 10px 0;
`;

const ContinueReading = styled(Link)<ContinueReadingProps>`
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme, variant }) => theme.palette[variant]};
    border-bottom: 1px solid ${({ theme, variant }) => theme.palette[variant]};
    ${({ theme }) => theme.palette.button};
    cursor: pointer;
`;
