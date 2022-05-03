import { PageContainer } from "components/page";
import React from "react";
import DataSecurity from "components/dataSecurity/DataSecurity";

const DataSecurityPage: React.FC = () => {
    return (
        <PageContainer eyebrow="Verhalten" title="Datenschutz" hidePartyBus={true}>
            <DataSecurity />
        </PageContainer>
    );
};

export default DataSecurityPage;
