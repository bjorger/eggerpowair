import { PageContainer } from "components/page";
import ProjectGrid from "components/projects";
import React from "react";
import PartyTruck from "assets/PartyTruck.jpg";

const Projects: React.FC = () => {
    return (
        <PageContainer customPartyBus={PartyTruck} eyebrow="Erfahrung" title="Unsere Projekte">
            <ProjectGrid />
        </PageContainer>
    );
};

export default Projects;
