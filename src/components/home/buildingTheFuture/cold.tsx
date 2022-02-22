import React from "react";
import Step1 from "assets/cold-step1.png";
import Step2 from "assets/cold-step2.png";
import Step3 from "assets/cold-step3.png";
import Step from "./step";

const coldSteps = [
    {
        img: Step1,
        title: "Schritt 1",
        description:
            "Die KALTE TROCKENDRUCKLUFT (KDL) dringt durch MIKRO-RISSE in die Verunreinigung ein...",
    },
    {
        img: Step2,
        title: "Schritt 2",
        description:
            "...dehnt sich durch Erwärmung an der Luft spontan um ein vielfaches aus...",
    },
    {
        img: Step3,
        title: "Schritt 3",
        description: "..und „reißt“ die Verschmutzung vom Untergrund ab.",
    },
];
const Cold: React.FC = () => {
    return (
        <>
            {coldSteps.map((step) => (
                <Step
                    img={step.img}
                    title={step.title}
                    description={step.description}
                />
            ))}
        </>
    );
};

export default Cold;
