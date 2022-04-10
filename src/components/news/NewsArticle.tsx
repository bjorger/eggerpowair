import React from "react";
import PageContainer from "components/page/PageContainer";
import { PageWrap } from "components/page";
import styled from "styled-components";
import { getPaginatedNewsArticles, NewsArticleType, RichtextType } from "api/storyblok";
import { render } from "storyblok-rich-text-react-renderer";
import { useSearchParams } from "react-router-dom";
import { getNewsArticleById } from "../../api/storyblok";
import NewsArticleGridItem from "./NewsArticleGridItem";

const NewsArticle: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [content, setContent] = React.useState<NewsArticleType>();
    const [readMoreContent, setReadMoreContent] = React.useState<Array<NewsArticleType>>();

    function RichText(document: RichtextType) {
        // document is the rich text object you receive from Storyblok,
        // in the form { type: "doc", content: [ ... ] }
        return <ParagraphWrapper>{render(document)}</ParagraphWrapper>;
    }

    React.useEffect(() => {
        (async () => {
            const newsArticleId = searchParams.get("id");
            if (newsArticleId) {
                setContent(await getNewsArticleById(newsArticleId));
            }

            const { items: articles } = await getPaginatedNewsArticles("", 1, 3);

            setReadMoreContent(articles as NewsArticleType[]);
        })();
    }, [searchParams]);

    return (
        <PageContainer eyebrow="Erfahrung" title="News">
            <PageWrap variant="white">
                <Wrapper>
                    <Image src={content?.image.filename} alt={content?.image.alt} />
                    <Headline>{content?.headline}</Headline>
                    <SubHeadline>
                        {content?.date} | Geschrieben von {content?.author}
                    </SubHeadline>
                </Wrapper>
                {content && RichText(content?.text)}
                <Wrapper>
                    <ReadMoreHeadline>Read More</ReadMoreHeadline>
                    <ReadMoreGrid>
                        {readMoreContent?.map((item) => (
                            <NewsArticleGridItem key={item.id} item={item} />
                        ))}
                    </ReadMoreGrid>
                </Wrapper>
            </PageWrap>
        </PageContainer>
    );
};

export default NewsArticle;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
`;

const Image = styled.img`
    width: 80%;
    border-radius: 36px;
`;

const Headline = styled.h2`
    ${({ theme }) => theme.fonts.h2};
    padding: 0;
    margin: 0;
    margin-top: 44px;
`;

const SubHeadline = styled.h3`
    padding: 0;
    margin-top: 20px;
    ${({ theme }) => theme.fonts.paragraph};
    color: ${({ theme }) => theme.palette.grey};
`;

const ParagraphWrapper = styled.div`
    ${({ theme }) => theme.fonts.paragraph}
`;

const ReadMoreHeadline = styled.h2`
    ${({ theme }) => theme.fonts.h2};
    text-transform: uppercase;
    margin-bottom: 50px;
`;

const ReadMoreGrid = styled.div`
    div {
        margin: 30px 0;
    }
`;
