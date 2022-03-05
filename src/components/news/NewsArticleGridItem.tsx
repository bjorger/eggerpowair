import React from "react";
import styled from "styled-components";
import { render } from "storyblok-rich-text-react-renderer";
import { NewsArticle, RichtextType } from "api/storyblok";

interface NewsArticleGridItemProps {
    item: NewsArticle;
}

function RichText(document: RichtextType) {
    // document is the rich text object you receive from Storyblok,
    // in the form { type: "doc", content: [ ... ] }
    return <div>{render(document)}</div>;
}

const NewsArticleGridItem: React.FC<NewsArticleGridItemProps> = ({ item }) => {
    return (
        <Container>
            <Image src={item.preview_image.filename} alt={item.preview_image.alt} />
        </Container>
    );
};

export default NewsArticleGridItem;

const Container = styled.div``;

const Image = styled.img`
    border-radius: 36px;
`;
