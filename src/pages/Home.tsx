import React from "react";
import {
    Stage,
    WhatWeDo,
    Projects,
    WhereWeWork,
    WhyChooseUs,
    TruthInEngineering,
    BuildingTheFuture,
} from "components/home";

import StickyThemeToggle from "components/themeToggle/stickyThemeToggle";

const Home: React.FC = () => {
    return (
        <main style={{ position: "relative" }} id="page-wrap">
            <Stage />
            <WhatWeDo />
            <Projects />
            <WhereWeWork />
            <WhyChooseUs />
            <TruthInEngineering />
            <BuildingTheFuture />
            <StickyThemeToggle />
        </main>
    );
};

export default Home;
