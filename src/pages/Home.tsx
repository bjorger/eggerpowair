import React from "react";
import { Stage, WhatWeDo, Projects, WhereWeWork, WhyChooseUs, TruthInEngineering, BuildingTheFuture } from "components/home";
import { PageContainer } from "components/page";

const Home: React.FC = () => {
    return (
        <PageContainer hideDefaultStage={true}>
            <Stage />
            <WhatWeDo />
            <Projects />
            <WhereWeWork />
            <WhyChooseUs />
            <TruthInEngineering />
            <BuildingTheFuture />
        </PageContainer>
    );
};

export default Home;
