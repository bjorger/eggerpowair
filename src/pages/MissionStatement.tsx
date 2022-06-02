import { PageContainer } from "components/page";
import React from "react";
import MissionStatement from "../components/missionStatement/MissionStatement";

const MissionStatementPage: React.FC = () => {
    return (
        <PageContainer eyebrow="Verhalten" title="Leitfaden" hidePartyBus={true}>
            <MissionStatement />
        </PageContainer>
    );
};

export default MissionStatementPage;
