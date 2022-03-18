import React from "react";
import { PageWrap } from "components/page";
import { getPaginatedNewsArticles, NewsCategories } from "api/storyblok";
import { NewsArticleType } from "api/storyblok";
import styled from "styled-components";
import NewsArticleGridItem from "./NewsArticleGridItem";
import { useAppSelector } from "redux/hooks";
import { Variants } from "components/components.sc";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";

const NewsArticleGrid: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);
    const [searchParams, setSearchParams] = useSearchParams();
    const [totalPages, setTotalPages] = React.useState<number>(1);
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [currentCategory, setCurrentCategory] = React.useState<string>();
    const [content, setContent] = React.useState<Array<NewsArticleType>>();

    React.useEffect(() => {
        (async () => {
            const _category = searchParams.get("category");
            const _currentPage = searchParams.get("currentPage");

            if (_currentPage) {
                setCurrentPage(parseInt(_currentPage));
            }

            if (_category) {
                setCurrentCategory(_category);
            }

            const { total, articles } = await getPaginatedNewsArticles(_category ? _category : "", _currentPage ? parseInt(_currentPage) : 1);

            setTotalPages(total);
            setContent(articles);
        })();
    }, [searchParams]);

    const filterByCategory = async (event: React.MouseEvent<HTMLButtonElement>, category: string) => {
        setCurrentPage(1);
        setCurrentCategory(category);
        document.querySelectorAll(".active").forEach((item) => item.classList.remove("active"));
        const target = event.target as HTMLButtonElement;
        target.classList.add("active");
        const { total, articles } = await getPaginatedNewsArticles(category);
        setTotalPages(total);
        setContent(articles);
        searchParams.set("category", category);
        searchParams.set("currentPage", "1");
        setSearchParams(searchParams);
    };

    const loadNewArticles = async (direction: number = 1) => {
        if (direction > 0) {
            if (currentPage + direction > totalPages) {
                return;
            }
        }

        if (direction < 0) {
            if (currentPage + direction < 1) {
                return;
            }
        }

        const { articles } = await getPaginatedNewsArticles(currentCategory, currentPage + direction);
        setContent(articles);
        setCurrentPage(currentPage + direction);
        searchParams.set("currentPage", (currentPage + direction).toString());
        setSearchParams(searchParams);
    };

    return (
        <PageWrap variant="white">
            <Categories>
                {Object.keys(NewsCategories).map((key: string) => {
                    if (key === "all") {
                        return (
                            <Category
                                variant={theme}
                                key={key}
                                className={"" === currentCategory || !currentCategory ? "active" : ""}
                                onClick={(event) => filterByCategory(event, "")}
                            >
                                Alle
                            </Category>
                        );
                    } else {
                        return (
                            <Category
                                variant={theme}
                                key={key}
                                className={key === currentCategory ? "active" : ""}
                                onClick={(event) => filterByCategory(event, key)}
                            >
                                {NewsCategories[key as keyof typeof NewsCategories]}
                            </Category>
                        );
                    }
                })}
            </Categories>
            <NewsArticleItemGrid>
                {content?.map((item, index) => (
                    <NewsArticleGridItem item={item} key={item.author + item.date + index} />
                ))}
            </NewsArticleItemGrid>
            <PageCountIndicatorContainer variant={theme}>
                <ArrowBack onClick={() => loadNewArticles(-1)} />
                <PageIndicatorText>
                    Seite {currentPage} von {totalPages}
                </PageIndicatorText>
                <ArrowForward onClick={() => loadNewArticles()} />
            </PageCountIndicatorContainer>{" "}
        </PageWrap>
    );
};

export default NewsArticleGrid;

interface CategoryProps {
    variant: Variants;
}

const Categories = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100vw;
    overflow-x: scroll;
    color: ${({ theme }) => theme.palette.black};

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled.button<CategoryProps>`
    border: none;
    background: transparent;
    text-transform: uppercase;
    padding-bottom: 5px;
    cursor: pointer;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        padding-bottom: 10px;
    }

    ${({ theme }) => theme.fonts.button}

    &.active {
        color: ${({ theme, variant }) => theme.palette[variant]};
        border-bottom: 1px solid ${({ theme, variant }) => theme.palette[variant]};
    }
`;

const NewsArticleItemGrid = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        margin-top: 100px;
        grid-template-columns: repeat(3, 1fr);
        gap: 65px;
    }
`;

interface PageCountIndicatorContainerProps {
    variant: Variants;
}

const PageCountIndicatorContainer = styled.div<PageCountIndicatorContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg {
        color: ${({ theme, variant }) => theme.palette[variant]};
        cursor: pointer;
    }
`;

const PageIndicatorText = styled.span`
    margin: 0 10px;
`;
