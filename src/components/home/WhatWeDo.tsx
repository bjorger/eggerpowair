import React from "react";
import styled from "styled-components";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import WhatWeDoItems, { WhatWeDoItem } from "./WhatWeDoItems";

const WhatWeDo: React.FC = () => {
    const whatWeDoItems: WhatWeDoItem[] = [
        {
            number: "01",
            title: "Schnell & kostensparend",
            description:
                "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
        {
            number: "02",
            title: "Genial umweltfreundlich",
            description:
                "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
        {
            number: "03",
            title: "Mobil in ganz Europa",
            description:
                "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
        {
            number: "04",
            title: "Technik-Profi-Reinigung",
            description:
                "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
        {
            number: "05",
            title: "Für uns ist kein Auftrag zu klein...",
            description:
                "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
        {
            number: "06",
            title: "Schulung & Support",
            description:
                "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
        },
    ];

    return (
        <WhatWeDoContainer>
            <WhatWeDoContent>
                <Headline>
                    <Eyebrow color="orange">What we do</Eyebrow>
                    <HeadlineMain>
                        6 gute Gründe für Egger <br />
                        PowAir Cleaning:
                    </HeadlineMain>
                </Headline>
                <WhatWeDoItems items={whatWeDoItems} />
            </WhatWeDoContent>
        </WhatWeDoContainer>
    );
};

export default WhatWeDo;

const WhatWeDoContainer = styled.div`
    padding: 135px 0;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
`;

const WhatWeDoContent = styled.div`
    grid-column: 5 / span 16;
`;
