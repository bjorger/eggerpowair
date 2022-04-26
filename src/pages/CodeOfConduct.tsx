import { PageContainer } from "components/page";
import React from "react";
import CoC from "components/CoC";

const CodeOfConduct: React.FC = () => {
    return (
        <PageContainer eyebrow="Verhalten" title="Code of Conduct" hidePartyBus={true}>
            <CoC />
        </PageContainer>
    );
};

export default CodeOfConduct;
