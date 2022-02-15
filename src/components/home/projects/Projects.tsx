import React from "react";
import styled from "styled-components";
import { Headline, HeadlineMain, Eyebrow } from "components/headline";
import DummyImage from "assets/Egger-PowAir.jpg";
import ProjectGridItem from "./ProjectGridItem";

const DummyData = [
    {
        img: DummyImage,
        headline: "Baumaschinen",
        description: "100 Sunrise Ct Hamel, Minnesota(MN)",
    },
    {
        img: DummyImage,
        headline: "Baumaschinen",
        description: "100 Sunrise Ct Hamel, Minnesota(MN)",
    },
    {
        img: DummyImage,
        headline: "Baumaschinen",
        description: "100 Sunrise Ct Hamel, Minnesota(MN)",
    },
    {
        img: DummyImage,
        headline: "Baumaschinen",
        description: "100 Sunrise Ct Hamel, Minnesota(MN)",
    },
];

const Projects: React.FC = () => {
    return (
        <ProjectsContainer>
            <ProjectsContent>
                <Headline>
                    <Eyebrow>COLD POWAIR</Eyebrow>
                    <HeadlineMain color="white">
                        Reinigung mit Trocken-Druck-Luft
                    </HeadlineMain>
                    <ProjectGrid>
                        {DummyData.map((item, index) => (
                            <ProjectGridItem
                                image={item.img}
                                headline={item.headline}
                                description={item.description}
                                key={item.headline + index.toString()}
                            />
                        ))}
                    </ProjectGrid>
                </Headline>
            </ProjectsContent>
        </ProjectsContainer>
    );
};

export default Projects;

const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    padding: 135px 0;
    background: ${({ theme }) => theme.palette.main};
`;

const ProjectsContent = styled.div`
    grid-column: 5 / span 16;
`;

const ProjectGrid = styled.div`
    padding-top: 30px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
