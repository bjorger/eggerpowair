import React from "react";
import { Stage, WhatWeDo, Projects } from "components/home";
const Home: React.FC = () => {
    return (
        <main id="page-wrap">
            <Stage />
            <WhatWeDo />
            <Projects />
        </main>
    );
};

export default Home;
