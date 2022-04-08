import React from "react";
import { PageWrap } from "components/page";
import styled from "styled-components";
import { Button, Variants } from "components/components.sc";
import { useAppSelector } from "redux/hooks";

const CoC: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    const downloadPDF = () => {};

    return (
        <PageWrap variant="white" padding="0" paddingMobile="0">
            <Headline>Präambel / Vorwort</Headline>
            <AuthorInformation>
                01.August 2019 I Geschrieben von Gründer und Geschäftsführer <br /> Robert Egger
            </AuthorInformation>
            <Paragraph>
                Als ich nach mehreren Jahren der Forschung und Entwicklung in meiner Garage in Oberhofen, Tirol, Österreich, am 04. Juli 2014 die
                Firma Egger PowAir Cleaning GmbH mit Sitz in Eugendorf bei Salzburg gegründet habe, war dies für mich ein riesiger Schritt. <br />
                Trotz aller Ängste und Sorgen habe ich mir vor Gründung des Unternehmens folgendes fest vorgenommen:
                <br />
                <ul>
                    <li>eine bessere Zukunft für unsere Kinder hinsichtlich Klima und Umwelt schaffen zu helfen</li>
                    <li>die Firma auf ethisch-moralischer Grundlage zu betreiben</li>
                    <li> keine Korruption, und dazu zähle ich auch Schwarzarbeit, zuzulassen oder zu fördern </li>
                </ul>
                Der nachstehende Code of Conduct/Verhaltenskodex bringt zum Ausdruck, was ich mit diesen drei Überschriften meine.
                <br />
                Ich lade alle gegenwärtigen und zukünftigen Mitarbeiterinnen und Mitarbeiter der Egger PowAir Cleaning GmbH, Lieferanten und Kunden
                sowie Geschäftspartner ein, den Verhaltenskodex zu studieren, sich immer wieder in Erinnerung zu rufen worum es darin geht und vor
                allen Dingen, den Verhaltenskodex zu leben.
                <br /> <br />
                Robert Egger
                <br /> Gründer/Geschäftsführer
            </Paragraph>
            <ButtonContainer>
                <DownloadButton variant={theme}>Download Code of Conduct</DownloadButton>
            </ButtonContainer>
        </PageWrap>
    );
};

export default CoC;

const Headline = styled.h2`
    margin-top: 50px;
    ${({ theme }) => theme.fonts.h2};
    text-align: center;
`;

const AuthorInformation = styled.p`
    text-align: center;
    ${({ theme }) => theme.fonts.paragraph};
    color: ${({ theme }) => theme.palette.grey};
    margin: 30px 0;
`;

const Paragraph = styled.p`
    ${({ theme }) => theme.fonts.paragraph};
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;

interface ButtonProps {
    variant: Variants;
}

const DownloadButton = styled.button<ButtonProps>`
    ${({ theme }) => theme.fonts.button};
    border: none;
    background: ${({ theme, variant }) => theme.palette[variant]};
    color: ${({ theme }) => theme.palette.white};
    border-radius: 44px;
    padding: 18px 30px;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    width: auto;
    transition: 0.5s ease background;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        max-width: 300px;
    }
`;
