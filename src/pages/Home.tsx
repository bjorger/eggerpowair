import React from "react";
import {
    Stage,
    WhatWeDo,
    Projects,
    WhereWeWork,
    WhyChooseUs,
    TruthInEngineering,
} from "components/home";
const Home: React.FC = () => {
    return (
        <main id="page-wrap">
            <Stage />
            <WhatWeDo />
            <Projects />
            <WhereWeWork />
            <WhyChooseUs />
            <TruthInEngineering />
        </main>
    );
};

export default Home;
