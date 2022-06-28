import { PageContainer } from "components/page";
import React from "react";
import Impressum from "components/Impressum/Impressum";

const ImpressumPage: React.FC = () => {
    return (
        <PageContainer eyebrow="Impressum" hidePartyBus={true}>
            <Impressum />
        </PageContainer>
    );
};

export default ImpressumPage;
