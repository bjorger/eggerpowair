import { PageContainer } from "components/page";
import React from "react";
import AGB from "components/AGB";

const AGBPage: React.FC = () => {
    return (
        <PageContainer eyebrow="Rechtliches" title="AGB" hidePartyBus={true}>
            <AGB />
        </PageContainer>
    );
};

export default AGBPage;
