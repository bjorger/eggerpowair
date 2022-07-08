import React from "react";
import styled from "styled-components";
import { NewsArticleType } from "api/storyblok";
import { useAppSelector } from "redux/hooks";
import { Paragraph, Variants } from "components/Components.sc";
import { Link, useNavigate } from "react-router-dom";

interface NewsArticleGridItemProps {
    item: NewsArticleType;
}

const NewsArticleGridItem: React.FC<NewsArticleGridItemProps> = ({ item }) => {
    const theme = useAppSelector((state) => state.themeToggle.color);
    let navigate = useNavigate();

    return (
        <Container onClick={() => navigate(`/news-article?id=${item.id}`, { replace: true })}>
            <Image imageUrl={item.image.filename} />
            <Headline>{item.headline}</Headline>
            <Date color="grey">{item.date}</Date>
            <PreviewText margin="10px 0" padding="0">
                {item.preview_text}
            </PreviewText>
            <ContinueReading to={`/news-article?id=${item.id}`} variant={theme}>
                Weiterlesen
            </ContinueReading>
        </Container>
    );
};

export default NewsArticleGridItem;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 40vw;
    text-decoration: inherit;
    color: inherit;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        width: 100%;
    }
`;

interface ImageProps {
    imageUrl: string;
}

interface ContinueReadingProps {
    variant: Variants;
}

const Image = styled.div<ImageProps>`
    border-radius: 20px;
    height: 120px;
    width: 100%;
    margin-bottom: 10px;
    background: url(${({ imageUrl }) => imageUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        height: 200px;
        border-radius: 36px;
    }

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
        height: 200px;
    }
`;

const Headline = styled.span`
    ${({ theme }) => theme.fonts.h2}
    margin: 10px 0 0 0;
    padding: 0;
    word-wrap: break-word;
    max-width: 40vw;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        margin: 20px 0 10px;
    }
`;

const Date = styled(Paragraph)`
    padding: 0;
    margin: 0;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        margin: 10px 0;
    }
`;

const PreviewText = styled(Paragraph)`
    display: none;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        display: block;
    }
`;

const ContinueReading = styled(Link)<ContinueReadingProps>`
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme, variant }) => theme.palette[variant]};
    border-bottom: 1px solid ${({ theme, variant }) => theme.palette[variant]};
    ${({ theme }) => theme.palette.button};
    cursor: pointer;
`;
