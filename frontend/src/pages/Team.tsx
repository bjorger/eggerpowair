import { PageContainer } from "components/page";
import React from "react";
import TeamMemberGrid from "components/team/teamMemberGrid";
import Jobs from "components/team/jobs";

const Team: React.FC = () => {
    return (
        <PageContainer eyebrow="EggerpowAir" title="Unser Team">
            <TeamMemberGrid />
            <Jobs />
        </PageContainer>
    );
};

export default Team;
