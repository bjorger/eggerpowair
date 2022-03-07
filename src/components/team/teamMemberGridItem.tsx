import { TeamMember } from "api/storyblok";
import React from "react";
import styled from "styled-components";
import { LinkedIn } from "@mui/icons-material";
import { Variants } from "components/components.sc";
import { useAppSelector } from "redux/hooks";

interface TeamMemberGridItemProps {
    member: TeamMember;
}

const TeamMemberGridItem: React.FC<TeamMemberGridItemProps> = ({ member }) => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <Container>
            <Image imageUrl={member.image.filename} />
            <Informations>
                <TeamInformationContainer>
                    <Name>{member.name}</Name>
                    <Position variant={theme}>{member.position}</Position>
                </TeamInformationContainer>
                {member.linkedIn && (
                    <LinkedInContainer variant={theme}>
                        <a href={member.linkedIn && member.linkedIn.url}>
                            <LinkedIn />
                        </a>
                    </LinkedInContainer>
                )}
            </Informations>
        </Container>
    );
};

export default TeamMemberGridItem;

interface ImageProps {
    imageUrl: string;
}

interface LinkedInContainerProps {
    variant: Variants;
}

interface PositionProps {
    variant: Variants;
}

const Container = styled.div`
    border-radius: 36px;
    box-shadow: 5px 5px 27px rgba(0, 0, 0, 0.45);
    overflow: hidden;
`;

const TeamInformationContainer = styled.div`
    p {
        text-align: center;
        @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
            text-align: left;
        }
    }
`;

const Image = styled.div<ImageProps>`
    background: url(${({ imageUrl }) => imageUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 150px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        height: 300px;
    }
`;

const Informations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        padding: 20px 60px;
        height: 120px;
    }
`;

const Name = styled.p`
    ${({ theme }) => theme.fonts.paragraph};
    margin: 0;
    padding: 0;
    margin-bottom: 0px;
    margin-top: 10px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        padding: 20px 60px;
        height: 120px;
        margin-bottom: 10px;
        margin-top: 0;
    }
`;

const Position = styled.p<PositionProps>`
    ${({ theme }) => theme.fonts.button}
    margin: 0;
    padding: 0;
    color: ${({ theme, variant }) => theme.palette[variant]};
`;

const LinkedInContainer = styled.div<LinkedInContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;

    svg {
        color: ${({ theme, variant }) => theme.palette[variant]};
    }
`;
