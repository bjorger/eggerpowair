import { PageContainer } from "components/page";
import React from "react";
import TeamMemberGrid from "components/team/TeamMemberGrid";
import Jobs from "components/team/Jobs";

const Team: React.FC = () => {
    return (
        <PageContainer eyebrow="Egger PowAir" title="Unser Team">
            <TeamMemberGrid />
            <Jobs />
        </PageContainer>
    );
};

export default Team;
