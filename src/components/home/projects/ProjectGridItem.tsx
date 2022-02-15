import styled from "styled-components";

interface ItemProps {
    image: string;
    headline: string;
    description: string;
}

const ProjectGridItem: React.FC<ItemProps> = ({
    image,
    headline,
    description,
}) => {
    return (
        <ProjectGridItemContainer>
            <Image src={image} alt="" />
            <Headline>{headline}</Headline>
            <Description>{description}</Description>
        </ProjectGridItemContainer>
    );
};

export default ProjectGridItem;

const ProjectGridItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    border-radius: 36px;
    width: 100%;
`;

const Headline = styled.h2`
    ${({ theme }) => theme.fonts.projectItem.headline};
    ${({ theme }) => theme.borderBottom};
    padding-bottom: 10px;
    color: ${({ theme }) => theme.palette.white};
`;

const Description = styled.p`
    ${({ theme }) => theme.fonts.projectItem.description};
    margin: 0;
    color: ${({ theme }) => theme.palette.white};
`;
