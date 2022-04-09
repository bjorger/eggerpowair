import React from "react";
import { PageWrap } from "components/page";
import { getPaginatedProjects, NewsCategories, ProjectType } from "api/storyblok";
import styled from "styled-components";
import { useAppSelector } from "redux/hooks";
import { Variants } from "components/components.sc";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";

const ProjectGrid: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);
    const [searchParams, setSearchParams] = useSearchParams();
    const [totalPages, setTotalPages] = React.useState<number>(1);
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [currentCategory, setCurrentCategory] = React.useState<string>();
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

            const { total, items } = await getPaginatedProjects(_category ? _category : "", _currentPage ? parseInt(_currentPage) : 1);

            setTotalPages(total);
            setContent(items as ProjectType[]);
        })();
    }, [searchParams]);

    const filterByCategory = async (event: React.MouseEvent<HTMLButtonElement>, category: string) => {
        setCurrentPage(1);
        setCurrentCategory(category);
        document.querySelectorAll(".active").forEach((item) => item.classList.remove("active"));
        const target = event.target as HTMLButtonElement;
        target.classList.add("active");
        const { total, items } = await getPaginatedProjects(category);
        setTotalPages(total);
        setContent(items as ProjectType[]);
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

        const { items } = await getPaginatedProjects(currentCategory, currentPage + direction);
        setContent(items as ProjectType[]);
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
            <ProjectItemGrid>
                {content?.map((item, index) => (
                    <ProjectItem key={`projectImage${index + 1}`} gridArea={`project${index + 1}`}>
                        <img style={{ height: "auto" }} src={item.image.filename} alt={item.image.alt} />
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

const Category = styled.button<CategoryProps>`
    border: none;
    background: transparent;
    text-transform: uppercase;
    padding-bottom: 5px;
    margin: 0px 10px;
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

const ProjectItemGrid = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    display: grid;
    gap: 20px;
    grid-template-areas:
        "project1 project2"
        "project1 project3"
        "project4 project5"
        "project6 project5"
        "project7 project8"
        "project7 project9";

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        margin-top: 100px;
        gap: 65px;
        place-items: start;
    }
`;

interface ProjectItemProps {
    gridArea: string;
}

const ProjectItem = styled.div<ProjectItemProps>`
    grid-area: ${({ gridArea }) => gridArea};
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
