import React from "react";
import { PageWrap } from "components/page";
import styled from "styled-components";
import { Paragraph, Variants } from "components/Components.sc";
import { useAppSelector } from "redux/hooks";
import Unternehmensleitfaden from "assets/Unternehmensleitfaden.pdf";

const MissionStatement: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <PageWrap variant="white" padding="0" paddingMobile="0">
            <Headline>Unternehmensleitbild</Headline>
            <Paragraph margin="30px 0" textAlign="center">
                Geschrieben von Gründer und Geschäftsführer <br /> Robert Egger
            </Paragraph>
            <Paragraph>
                <b>Unser Leitbild</b> <br />
                Unser Leitbild bildet die Grundlage für die Zielsetzungen, die Strategien und das unternehmerische Handeln.
                <br />
                <br />
                <b>Mitarbeiter*innen</b>
                <br /> Zur Erreichung unserer Unternehmensziele setzen wir auf die Leistungsfähigkeit und Kompetenz unserer Mitarbeiter*innen. Wir
                fördern durch Aus- und Weiterbildung das Wissen der Organisation, unterstützen die persönliche Entwicklung der Mitarbeiter*innen,
                sofern für angemessene Information und geeignete Arbeitsbedingungen. Der einzelne Mitarbeiter*innen informiert sich aktiv. Die
                Sicherheit und die Gesundheit unserer Mitarbeiter*innen und aller anderen Beteiligten sind für uns ein zentrales Anliegen.
                <br /> <br />
                <b> Führung und Mitwirkung </b>
                <br /> Die Unternehmensleitung fördert und motiviert die Mitarbeiter*innen zu mehr Eigenverantwortung und aktiver Mitarbeit. Durch
                regelmäßige Schulungen, sowie Aus- und Weiterbildungen wird sichergestellt, dass die Einhaltung rechtlicher Vorschriften hinsichtlich
                Umwelt und Gesellschaft vorgelebt und eingehalten wird. <br />
                <br /> <b>Wirtschaftlicher Erfolg</b>
                <br /> Der wirtschaftliche Erfolg gegenüber unserem Eigentümer, unseren Mitarbeiter*innen, Kunden, Lieferanten und Subunternehmern
                sowie der Gesellschaft steht im Vordergrund unseres Handelns. Zielführendes Handeln, die frühzeitige Erkennung von Chancen und Risiken
                und deren verantwortungsbewusste Berücksichtigung sichern den Fortbestand unseres Unternehmens und wahren die Interessen unseres
                Eigentümers. Durch systematische, fortwährende Verbesserung werden wir auch den wachsenden Anforderungen der Zukunft gerecht.
                <br />
                <br /> <b>Auftraggeber</b> <br /> Unsere Leistungen sind auf die Erfüllung der berechtigten Anforderungen und Erwartungen der
                Auftraggeber ausgerichtet. Wir werden den Bedürfnissen des Marktes durch Kundennähe, Professionalität, Innovationsfreudigkeit und
                Preiswürdigkeit gerecht. Im Rahmen der Strategien und Ziele werden auch in Richtung unserer Geschäftspartner Informationen und
                Erfahrungen offen kommuniziert. Wir sichern das erforderliche Maß an Geheimhaltung und Diskretion zu. Im Sinne der Qualität und
                Wirtschaftlichkeit unserer Leistungen bauen wir auch auf die Erfahrung und Kapazitäten gezielt ausgewählter Lieferanten und
                Subunternehmer. <br /> <br />
                <b>Gesellschaft</b> <br />
                Wir respektieren die Menschenrechte und fördern das Gemeinwohl. Wir halten uns an das geltende Recht und bekennen uns zu fairem
                Wettbewerb. Bei der Erstellung unserer Lieferungen und Leistungen streben wir nach einem schonenden Umgang mit Energie und Rohstoffen
                und nach Verminderung von Emissionen und Abfallstoffen. <br /> <br /> <b>Kundenorientierung</b> <br /> Wir verhalten uns unseren
                Auftraggebern und Geschäftspartnern gegenüber fair und ehrlich. Wir erfassen die Wünsche, Bedürfnisse und Erwartungen unserer
                Auftraggeber und Geschäftspartner, um eine zielgerichtete Umsetzung in Produkte, Dienstleistungen oder andere Prozesse zu
                gewährleisten. Unser oberstes Ziel ist es, auf der Basis von Vertrauen eine langfristige und stabile Beziehung zu unseren
                Auftraggebern und Geschäftspartnern aufzubauen.
                <br />
                <br /> <b> Unsere Umwelt</b> <br /> Wir verpflichten uns zur fortlaufenden Verbesserung unserer Umweltleistungen und streben auf
                unseren Märkten eine Vorreiterrolle hinsichtlich ökologischen Handelns an. Bei Kunden, Auftraggebern und Geschäftspartnern soll unsere
                Kompetenz in Umweltfragen erkennbar sein und für uns werben. Oberstes Prinzip ist die Einhaltung aller umweltrelevanten bindenden
                Verpflichtungen. Eine große Verantwortung tragen hierbei die Mitarbeiter*innen in der Auftragsabwicklung, deren Aufgabe es ist die
                Wünsche der Kunden unter strengster Berücksichtigung anfallender Umweltaspekte durchzuführen. Unsere Maßnahmen zur Erreichung der
                festgesetzten Umweltziele sind kosteneffizient und sollen zur Entwicklung des Unternehmens beitragen. Wir reduzieren umweltschädliche
                Auswirkungen, die durch unsere Geschäftstätigkeit entstehen können, in dem Rahmen, in dem sie von uns beeinflussbar sind, mit
                wirtschaftlich vertretbarem Aufwand. Umweltschutz wird von den Mitarbeiter*innen unseres Unternehmens gelebt. Um dies zu erreichen,
                werden Mitarbeiter*innen fortlaufend informiert und deren Bewusstsein gestärkt. Das Wahrnehmen unserer Verantwortung der Umwelt
                gegenüber ist auch nach außen erkennbar.
            </Paragraph>
            <ButtonContainer>
                <DownloadButton download="UnternehmensLeitfaden.pdf" href={Unternehmensleitfaden} variant={theme}>
                    Unternehmensleitbild herunterladen
                </DownloadButton>
            </ButtonContainer>
        </PageWrap>
    );
};

export default MissionStatement;

const Headline = styled.h2`
    margin-top: 50px;
    ${({ theme }) => theme.fonts.h2};
    text-align: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 30px;
`;

interface ButtonProps {
    variant: Variants;
}

const DownloadButton = styled.a<ButtonProps>`
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
    cursor: pointer;
    text-decoration: none;
`;
