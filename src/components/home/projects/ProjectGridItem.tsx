import styled from "styled-components";

interface ItemProps {
    image: string;
    headline: string;
}

const ProjectGridItem: React.FC<ItemProps> = ({ image, headline }) => {
    return (
        <ProjectGridItemContainer>
            <Image loading="lazy" src={image} alt="" />
            <Headline>{headline}</Headline>
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
    height: 200px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        height: 400px;
    }
`;

const Headline = styled.h2`
    ${({ theme }) => theme.fonts.projectItem.headline};
    ${({ theme }) => theme.borderBottom};
    padding-bottom: 10px;
    color: ${({ theme }) => theme.palette.white};
`;
