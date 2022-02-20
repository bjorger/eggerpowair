import React from "react";
import { Stage, WhatWeDo, Projects, WhereWeWork } from "components/home";
const Home: React.FC = () => {
    return (
        <main id="page-wrap">
            <Stage />
            <WhatWeDo />
            <Projects />
            <WhereWeWork />
        </main>
    );
};

export default Home;
