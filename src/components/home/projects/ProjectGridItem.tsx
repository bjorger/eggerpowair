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
        </ProjectGridItemContainer>
    );
};

export default ProjectGridItem;

const ProjectGridItemContainer = styled.div`
    display: flex;
`;

const Image = styled.img`
    border-radius: 36px; ;
`;

const Headline = styled.h2`
    ${({ theme }) => theme.projectItem.headline};
`;
