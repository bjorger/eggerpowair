import React from "react";
import Step1 from "assets/hot-step1.png";
import Step2 from "assets/hot-step2.png";
import Step3 from "assets/hot-step3.png";
import Step from "./step";

const hotSteps = [
    {
        img: Step1,
        title: "Schritt 1",
        description:
            "Das erhitzte (nach Bedarf bis zu 100°C) Egger PowAir Granulate (Feuchtigkeit 0% bis 5%) trifft auf der zu reinigenden Fläche auf.",
    },
    {
        img: Step2,
        title: "Schritt 2",
        description:
            "Die heiße Druckluft und Egger PowAir Granulate erzeugen Mikro Risse in der Oberfläche, das nachströmende Strahlgut dringt ein, erkaltet..",
    },
    {
        img: Step3,
        title: "Schritt 3",
        description: "...und „reibt“ durch das Egger PowAir Granulate die Oberflächenmaterialien, Ablagerungen, Lacke... kraftvoll ab.",
    },
];
const Hot: React.FC = () => {
    return (
        <>
            {hotSteps.map((step) => (
                <Step key={step.img} img={step.img} title={step.title} description={step.description} />
            ))}
        </>
    );
};

export default Hot;
