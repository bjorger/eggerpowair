import React from "react";
import PageContainer from "components/page/PageContainer";
import { PageWrap } from "components/page";
import styled from "styled-components";
import { getPaginatedNewsArticles, NewsArticleType, RichtextType } from "api/storyblok";
import { render } from "storyblok-rich-text-react-renderer";
import { useSearchParams } from "react-router-dom";
import { getNewsArticleById } from "api/storyblok";
import NewsArticleGridItem from "./NewsArticleGridItem";
import { useAppSelector } from "redux/hooks";
import { Facebook } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Variants } from "components/Components.sc";
import { Video } from "../home/whychooseus/TruthInEngineering";

const NewsArticle: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [content, setContent] = React.useState<NewsArticleType>();
    const [readMoreContent, setReadMoreContent] = React.useState<Array<NewsArticleType>>();
    const theme = useAppSelector((state) => state.themeToggle.color);

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
        <PageContainer hideSwipeOnMobile={true} eyebrow="Was uns bewegt" title="News">
            <PageWrap variant="white">
                <Wrapper>
                    {content?.videoID ? (
                        <NewsVideo title="youtube-1" src={`https://www.youtube.com/embed/${content.videoID}`}></NewsVideo>
                    ) : (
                        <Image src={content?.image.filename} alt={content?.image.alt} />
                    )}
                    <Headline>{content?.headline}</Headline>
                    <SubHeadline>
                        {content?.date} | Geschrieben von {content?.author}
                    </SubHeadline>
                </Wrapper>
                {content && RichText(content?.text)}
                <SocialMedia variant={theme}>
                    <a href="https://www.facebook.com/EggerPowAir/" target="_blank" rel="noreferrer">
                        <Facebook />
                    </a>
                    <a href="https://www.instagram.com/egger_powair_cleaning_gmbh" target="_blank" rel="noreferrer">
                        <Instagram />
                    </a>
                    <a href="https://www.linkedin.com/company/egger-powair-cleaning-gmbh/" target="_blank" rel="noreferrer">
                        <LinkedIn />
                    </a>
                </SocialMedia>

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

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        width: 700px;
    }
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

interface SocialMediaProps {
    variant: Variants;
}

const SocialMedia = styled.div<SocialMediaProps>`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    svg {
        color: ${({ theme, variant }) => theme.palette[variant]};
        padding: 10px;
        font-size: 30px;
        cursor: pointer;

        &:first-child {
            padding-left: 0;
        }
    }
`;

const NewsVideo = styled(Video)`
    height: 250px;
    position: relative;
    width: 90%;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        height: 600px;
        width: 85%;
    }
`;
