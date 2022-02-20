import React from "react";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import WhatWeDoItems, { WhatWeDoItem } from "./WhatWeDoItems";
import PageWrap from "components/pageWrap";

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
        <PageWrap variant="light">
            <Headline>
                <Eyebrow color="orange">What we do</Eyebrow>
                <HeadlineMain>
                    6 gute Gründe für Egger <br />
                    PowAir Cleaning:
                </HeadlineMain>
            </Headline>
            <WhatWeDoItems items={whatWeDoItems} />
        </PageWrap>
    );
};

export default WhatWeDo;
