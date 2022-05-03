import { getTeamMembers, TeamMember } from "api/storyblok";
import { PageWrap } from "components/page";
import React from "react";
import styled from "styled-components";
import TeamMemberGridItem from "./TeamMemberGridItem";

const TeamMemberGrid: React.FC = () => {
    const [teamMembers, setTeamMembers] = React.useState<Array<TeamMember>>();

    React.useEffect(() => {
        (async () => {
            setTeamMembers(await getTeamMembers());
        })();
    }, []);

    return (
        <PageWrap variant="white">
            <Grid>
                {teamMembers?.map((member, index) => (
                    <TeamMemberGridItem key={member.position + index} member={member} />
                ))}
            </Grid>
        </PageWrap>
    );
};

export default TeamMemberGrid;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        gap: 50px;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
    }
`;
