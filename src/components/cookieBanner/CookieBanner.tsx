import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Variants } from "components/Components.sc";
import { useAppSelector } from "redux/hooks";

const CookieBanner: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <CookieConsent
            buttonText="Akzeptieren"
            declineButtonText="Ablehnen"
            containerClasses="cookieContainer"
            contentClasses="cookieContent"
            buttonClasses="cookieButtons"
        >
            <h3>Cookie - Einstellungen</h3>
            <p>
                Diese Website verwendet Cookies für Analysen. Indem Sie unsere Website nutzen, gehen wir davon aus, dass Sie mit dieser Verwendung
                einverstanden sind. Eine einmal erklärte Zustimmung zur Speicherung der Cookies kann von Ihnen jederzeit durch Löschung der Cookies
                widerrufen werden. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf
                erfolgten Verarbeitung nicht berührt.nhalte dieser Website sind nur unentgeltlich und unter der Voraussetzung gestattet, dass sowohl
                die Quelle als auch die Internet-Adresse genannt und verlinkt werden.
            </p>
            <StyledLink variant={theme} to="/datasecurity">
                Datenschutzerklärung
            </StyledLink>
        </CookieConsent>
    );
};

export default CookieBanner;

interface StyledLinkProps {
    variant: Variants;
}

const StyledLink = styled(Link)<StyledLinkProps>`
    color: ${({ theme, variant }) => theme.palette[variant]};
`;
