import React from "react";
import { PageWrap } from "components/page";
import { getPaginatedProjects, ProjectCategories, ProjectType } from "api/storyblok";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";
import { Categories, Category, PageCountIndicatorContainer, PageIndicatorText } from "components/news/NewsArticleGrid";
import { FormControl, InputLabel, MenuItem, SelectChangeEvent, Select } from "@mui/material";
import { BrowserView, MobileView } from "components/Components.sc";
import { ReduxProjectCategories, setProjectCategories } from "redux/features/categories/categories";

const ProjectGrid: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);
    const categories = useAppSelector((state) => state.contentCategories.projects);
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const [totalPages, setTotalPages] = React.useState<number>(1);
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [currentCategory, setCurrentCategory] = React.useState<string>("");
    const [content, setContent] = React.useState<Array<ProjectType>>();

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

            const { total, items, categories } = await getPaginatedProjects(_category ? _category : "", _currentPage ? parseInt(_currentPage) : 1);

            if (!_category) {
                dispatch(setProjectCategories(categories as ReduxProjectCategories));
            }

            setTotalPages(total);
            setContent(items as ProjectType[]);
        })();
    }, [searchParams, dispatch]);

    const filterByCategory = async (category: string) => {
        const _category = category === "all" ? "" : category;
        setCurrentPage(1);
        setCurrentCategory(category);
        const { total, items } = await getPaginatedProjects(category);
        setTotalPages(total);
        setContent(items as ProjectType[]);
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

        const { items } = await getPaginatedProjects(currentCategory, currentPage + direction);
        setContent(items as ProjectType[]);
        setCurrentPage(currentPage + direction);
        searchParams.set("currentPage", (currentPage + direction).toString());
        setSearchParams(searchParams);
    };

    return (
        <PageWrap variant="white">
            <BrowserView>
                <Categories>
                    {Object.keys(ProjectCategories)
                        .filter((key) => key === "all" || key in categories)
                        .map((key: string) => {
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
                                        {ProjectCategories[key as keyof typeof ProjectCategories]}
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
                        {Object.keys(ProjectCategories)
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
                                            {ProjectCategories[key as keyof typeof ProjectCategories]}
                                        </MenuItem>
                                    );
                                }
                            })}
                    </Select>
                </FormControl>
            </MobileView>
            <ProjectItemGrid>
                {content?.map((item, index) => (
                    <ProjectItem imageUrl={item.image.filename} key={`projectImage${index + 1}`} gridArea={index + 1}>
                        <ProjectItemOverlay>
                            <Text>
                                <Description>{item.text}</Description>
                                <Company>{item.company}</Company>
                            </Text>
                        </ProjectItemOverlay>
                    </ProjectItem>
                ))}
            </ProjectItemGrid>
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

export default ProjectGrid;

const ProjectItemGrid = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    display: grid;
    gap: 20px;
    grid-template-areas:
        "project1 project2"
        "project1 project3"
        "project4 project6"
        "project5 project6"
        "project7 project8"
        "project7 project9";

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        margin-top: 100px;
        place-items: start;
    }
`;

interface ProjectItemProps {
    gridArea: number;
    imageUrl: string;
}

const ProjectItem = styled.div<ProjectItemProps>`
    grid-area: ${({ gridArea }) => `project${gridArea}`};
    background: url(${({ imageUrl }) => imageUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: ${({ gridArea }) => (gridArea === 1 || gridArea === 6 || gridArea === 7 ? "200px" : "90px")};
    border-radius: 20px;
    position: relative;

    &:hover {
        div {
            display: flex;
        }
    }

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        height: ${({ gridArea }) => (gridArea === 1 || gridArea === 6 || gridArea === 7 ? "500px" : "240px")};
        border-radius: 36px;
    }
`;

const ProjectItemOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000000b5;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    display: none;
    border-radius: 20px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        border-radius: 36px;
    }
`;

const Text = styled.span`
    margin: 0 20px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        margin: 0 40px;
    }
`;

const Description = styled.p`
    color: ${({ theme }) => theme.palette.white};
    ${({ theme }) => theme.fonts.h2};
    margin: 0;
`;

const Company = styled.h2`
    ${({ theme }) => theme.fonts.headline.eyebrow};
    color: ${({ theme }) => theme.palette.yellow};
    margin: 0 0 10px 0;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        margin: 20px 0;
    }
`;
