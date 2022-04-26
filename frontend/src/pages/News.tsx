import { PageContainer } from "components/page";
import React from "react";
import NewsArticleGrid from "components/news/NewsArticleGrid";

const News: React.FC = () => {
    return (
        <PageContainer hideSwipeOnMobile={true} eyebrow="Erfahrung" title="News">
            <NewsArticleGrid />
        </PageContainer>
    );
};

export default News;
