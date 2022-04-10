import { PageContainer } from "components/page";
import ProjectGrid from "components/projects";
import React from "react";

const Projects: React.FC = () => {
    return (
        <PageContainer eyebrow="Erfahrung" title="Unsere Projekte">
            <ProjectGrid />
        </PageContainer>
    );
};

export default Projects;
