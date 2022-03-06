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
                <div>
                    <Name>{member.name}</Name>
                    <Position variant={theme}>{member.position}</Position>
                </div>
                {member.linkedIn && (
                    <LinkedInContainer variant={theme}>
                        <a href={member.linkedIn ? member.linkedIn : "/"}>
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

const Image = styled.div<ImageProps>`
    background: url(${({ imageUrl }) => imageUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
`;

const Informations = styled.div`
    height: 120px;
    padding: 20px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Name = styled.p`
    ${({ theme }) => theme.fonts.paragraph};
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
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
