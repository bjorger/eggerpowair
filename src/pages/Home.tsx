import React from "react";
import {
    Stage,
    WhatWeDo,
    Projects,
    WhereWeWork,
    WhyChoseUs,
} from "components/home";
const Home: React.FC = () => {
    return (
        <main id="page-wrap">
            <Stage />
            <WhatWeDo />
            <Projects />
            <WhereWeWork />
            <WhyChoseUs />
        </main>
    );
};

export default Home;
