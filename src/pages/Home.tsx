import React from "react";
import { Stage, WhatWeDo, Projects, WhereWeWork, WhyChooseUs, TruthInEngineering, BuildingTheFuture, Customers } from "components/home";
import { PageContainer } from "components/page";
import { PassionDriven } from "components/home/whychooseus";

const Home: React.FC = () => {
    return (
        <>
            <PageContainer hideDefaultStage={true}>
                <Stage />
                <WhatWeDo />
                <Projects />
                <WhereWeWork />
                <PassionDriven />
                <WhyChooseUs />
                <TruthInEngineering />
                <BuildingTheFuture />
            </PageContainer>
            <Customers />
        </>
    );
};

export default Home;
