import React from "react";
import { PageWrap } from "components/page";
import { getPaginatedNewsArticles, NewsCategories } from "api/storyblok";
import { NewsArticle } from "api/storyblok";
import styled from "styled-components";

const NewsArticleGrid: React.FC = () => {
    const [content, setContent] = React.useState<Array<NewsArticle>>();
    React.useEffect(() => {
        (async () => {
            setContent(await getPaginatedNewsArticles());
        })();
    }, []);

    const filterByCategory = async (event: React.MouseEvent<HTMLButtonElement>, category: string) => {
        document.querySelectorAll(".active").forEach((item) => item.classList.remove("active"));
        const target = event.target as HTMLButtonElement;
        target.classList.add("active");
        setContent(await getPaginatedNewsArticles(category));
    };

    console.log(content?.length);

    return (
        <PageWrap variant="white">
            <Content>
                <Categories>
                    {Object.keys(NewsCategories).map((key: string) => {
                        if (key === "all") {
                            return (
                                <Category className="active" onClick={(event) => filterByCategory(event, "")}>
                                    Alle
                                </Category>
                            );
                        } else {
                            return (
                                <Category onClick={(event) => filterByCategory(event, key)}>
                                    {NewsCategories[key as keyof typeof NewsCategories]}
                                </Category>
                            );
                        }
                    })}
                </Categories>
            </Content>
        </PageWrap>
    );
};

export default NewsArticleGrid;

const Content = styled.div`
    display: flex;
    align-items: center;
`;

const Categories = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const Category = styled.button`
    border: none;
    background: transparent;
    text-transform: uppercase;
    padding-bottom: 10px;

    ${({ theme }) => theme.fonts.button}

    &.active {
        color: ${({ theme }) => theme.palette.orange};
        border-bottom: 1px solid ${({ theme }) => theme.palette.orange};
    }
`;

const NewsArticleItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;
