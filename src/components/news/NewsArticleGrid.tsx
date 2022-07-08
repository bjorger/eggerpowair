import React from "react";
import { PageWrap } from "components/page";
import { getPaginatedNewsArticles, NewsCategories } from "api/storyblok";
import { NewsArticleType } from "api/storyblok";
import styled from "styled-components";
import NewsArticleGridItem from "./NewsArticleGridItem";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { BrowserView, MobileView, Variants } from "components/Components.sc";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "@mui/material";
import { ReduxNewsStateCategories, setNewsCategories } from "redux/features/categories/categories";

const NewsArticleGrid: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);
    const categories = useAppSelector((state) => state.contentCategories.news);
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const [totalPages, setTotalPages] = React.useState<number>(1);
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [currentCategory, setCurrentCategory] = React.useState<string>("all");
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

            const { total, items, categories } = await getPaginatedNewsArticles(
                _category ? _category : "",
                _currentPage ? parseInt(_currentPage) : 1,
            );

            if (!_category) {
                dispatch(setNewsCategories(categories as ReduxNewsStateCategories));
            }

            setTotalPages(total);
            setContent(items as NewsArticleType[]);
        })();
    }, [searchParams, dispatch]);

    const filterByCategory = async (category: string) => {
        const _category = category === "all" ? "" : category;
        setCurrentPage(1);
        setCurrentCategory(category);
        const { total, items: articles } = await getPaginatedNewsArticles(_category);
        setTotalPages(total);
        setContent(articles as NewsArticleType[]);
        searchParams.set("category", _category);
        searchParams.set("currentPage", "1");
        setSearchParams(searchParams);
    };

    const onCategoryClick = async (event: React.MouseEvent<HTMLButtonElement>, category: string) => {
        document.querySelectorAll(".active").forEach((item) => item.classList.remove("active"));
        const target = event.target as HTMLButtonElement;
        target.classList.add("active");
        filterByCategory(category);
    };

    const onDropdownSelect = async (event: SelectChangeEvent): Promise<void> => {
        filterByCategory(event.target.value as string);
    };

    const loadNewArticles = async (direction: number = 1) => {
        if (direction > 0 && currentPage + direction > totalPages) {
            return;
        }

        if (direction < 0 && currentPage + direction < 1) {
            return;
        }

        const { items: articles } = await getPaginatedNewsArticles(currentCategory, currentPage + direction);
        setContent(articles as NewsArticleType[]);
        setCurrentPage(currentPage + direction);
        searchParams.set("currentPage", (currentPage + direction).toString());
        setSearchParams(searchParams);
    };

    return (
        <PageWrap variant="white">
            <BrowserView>
                <Categories>
                    {Object.keys(NewsCategories).map((key: string) => {
                        if (key === "all") {
                            return (
                                <Category
                                    variant={theme}
                                    key={key}
                                    className={key === currentCategory || !currentCategory ? "active" : ""}
                                    onClick={(event) => onCategoryClick(event, "")}
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
                                    onClick={(event) => onCategoryClick(event, key)}
                                >
                                    {NewsCategories[key as keyof typeof NewsCategories]}
                                </Category>
                            );
                        }
                    })}
                </Categories>
            </BrowserView>
            <MobileView>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Kategorie</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currentCategory}
                        label="category"
                        onChange={onDropdownSelect}
                    >
                        {Object.keys(NewsCategories)
                            .filter((key) => key === "all" || key in categories)
                            .map((key: string) => {
                                if (key === "all") {
                                    return (
                                        <MenuItem value={key} key={`${key}_mobile`}>
                                            Alle
                                        </MenuItem>
                                    );
                                } else {
                                    return (
                                        <MenuItem value={key} key={`${key}_mobile`}>
                                            {NewsCategories[key as keyof typeof NewsCategories]}
                                        </MenuItem>
                                    );
                                }
                            })}
                    </Select>
                </FormControl>
            </MobileView>
            <NewsArticleItemGrid>
                {content?.map((item, index) => (
                    <NewsArticleGridItem item={item} key={item.author + item.date + index} />
                ))}
            </NewsArticleItemGrid>
            {totalPages > 0 && (
                <PageCountIndicatorContainer variant={theme}>
                    <ArrowBack onClick={() => loadNewArticles(-1)} />
                    <PageIndicatorText>
                        Seite {currentPage} von {totalPages}
                    </PageIndicatorText>
                    <ArrowForward onClick={() => loadNewArticles()} />
                </PageCountIndicatorContainer>
            )}
        </PageWrap>
    );
};

export default NewsArticleGrid;

interface CategoryProps {
    variant: Variants;
}

export const Categories = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100vw;
    overflow-x: scroll;
    color: ${({ theme }) => theme.palette.black};

    ::-webkit-scrollbar {
        width: 3px;
        height: 3px;
    }
    ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
    }
    ::-webkit-scrollbar-thumb {
        background: #787878;
        border: 0px none #ffffff;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #787878;
    }
    ::-webkit-scrollbar-thumb:active {
        background: #787878;
    }
    ::-webkit-scrollbar-track {
        background: #ffffff;
        border: 0px none #ffffff;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
        background: #ffffff;
    }
    ::-webkit-scrollbar-track:active {
        background: #ffffff;
    }
    ::-webkit-scrollbar-corner {
        background: transparent;
    }

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        width: 100%;
        overflow-x: auto;
    }
`;

export const Category = styled.button<CategoryProps>`
    border: none;
    background: transparent;
    text-transform: uppercase;
    padding-bottom: 5px;
    margin: 0px 15px;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.black};

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
    column-gap: 10px;
    row-gap: 20px;
    place-items: top center;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        margin-top: 100px;
        grid-template-columns: repeat(3, 1fr);
        gap: 65px;
        place-items: start;
    }
`;

interface PageCountIndicatorContainerProps {
    variant: Variants;
}

export const PageCountIndicatorContainer = styled.div<PageCountIndicatorContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg {
        color: ${({ theme, variant }) => theme.palette[variant]};
        cursor: pointer;
    }
`;

export const PageIndicatorText = styled.span`
    margin: 0 10px;
`;
