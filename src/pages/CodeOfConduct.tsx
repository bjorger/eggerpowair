import { PageContainer } from "components/page";
import React from "react";
import CoC from "components/codeOfConduct";

const CodeOfConduct: React.FC = () => {
    return (
        <PageContainer eyebrow="Code of Conduct" hidePartyBus={true}>
            <CoC />
        </PageContainer>
    );
};

export default CodeOfConduct;
