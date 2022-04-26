import { PageContainer } from "components/page";
import ProjectGrid from "components/projects";
import React from "react";
import CustomPartyBus from "assets/TriplePartyTruck.png";

const Projects: React.FC = () => {
    return (
        <PageContainer hideSwipeOnMobile={true} eyebrow="Erfahrung" title="Unsere Projekte" customPartyBus={CustomPartyBus}>
            <ProjectGrid />
        </PageContainer>
    );
};

export default Projects;
