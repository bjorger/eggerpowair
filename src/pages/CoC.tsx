import { PageContainer } from "components/page";
import React from "react";
import CoC from "../components/CoC/coc";

const CodeOfConduct: React.FC = () => {
    return (
        <PageContainer eyebrow="Verhalten" title="Code of Conduct">
            <CoC />
        </PageContainer>
    );
};

export default CodeOfConduct;
