import { TeamMember } from "api/storyblok";
import React from "react";
import styled from "styled-components";
import { LinkedIn } from "@mui/icons-material";
import { BrowserView, Variants } from "components/components.sc";
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
                    <BrowserView>
                        <Contact>{member.email}</Contact>
                        <Contact>{member.phone}</Contact>
                    </BrowserView>
                </TeamInformationContainer>
                {member.linkedIn && (
                    <LinkedInContainer variant={theme}>
                        <a target="_blank" rel="noopener noreferrer" href={member.linkedIn && member.linkedIn.url}>
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
    padding: 10px;
    p {
        text-align: center;
        @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
            text-align: left;
        }
    }
`;

const Image = styled.div<ImageProps>`
    background: url(${({ imageUrl }) => imageUrl});
    background-size: cover;
    background-position: center 0px;
    background-repeat: no-repeat;
    height: 200px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        height: 381px;
    }
`;

const Informations = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        padding: 20px 30px;
        height: 200px;
    }
`;

const Name = styled.p`
    ${({ theme }) => theme.fonts.paragraph};
    margin: 0;
    padding: 0;
    margin-bottom: 0px;
    margin-top: 10px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
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
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    svg {
        color: ${({ theme, variant }) => theme.palette[variant]};
        font-size: 40px !important;
    }
`;

const Contact = styled.p`
    ${({ theme }) => theme.fonts.paragraphSmall};
    margin: 0;
`;