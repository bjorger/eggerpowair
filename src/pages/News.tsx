import { PageContainer } from "components/page";
import React from "react";
import NewsArticleGrid from "components/news/NewsArticleGrid";

const News: React.FC = () => {
    return (
        <PageContainer hideSwipeOnMobile={true} eyebrow="Was uns bewegt" title="News">
            <NewsArticleGrid />
        </PageContainer>
    );
};

export default News;
