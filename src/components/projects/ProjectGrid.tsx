import React from "react";
import { PageWrap } from "components/page";
import { getPaginatedProjects, NewsCategories, ProjectType } from "api/storyblok";
import styled from "styled-components";
import { useAppSelector } from "redux/hooks";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";
import { Categories, Category, PageCountIndicatorContainer, PageIndicatorText } from "components/news/NewsArticleGrid";

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
    border-radius: 36px;
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
