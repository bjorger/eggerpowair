import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface ItemProps {
    image: string;
    headline: string;
    category: string;
}

const ProjectGridItem: React.FC<ItemProps> = ({ image, headline, category }) => {
    const navigate = useNavigate();

    return (
        <ProjectGridItemContainer onClick={() => navigate(`/news?category=${category}&currentPage=1`, { replace: true })}>
            <Image url={image} />
            <Headline>{headline}</Headline>
        </ProjectGridItemContainer>
    );
};

export default ProjectGridItem;

const ProjectGridItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

interface ImageProps {
    url: string;
}

const Image = styled.div<ImageProps>`
    background: url(${({ url }) => url});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 36px;
    height: 300px;
    width: 100%;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        height: 500px;
    }
`;

const Headline = styled.h2`
    font-size: 24px;
    ${({ theme }) => theme.borderBottom};
    padding-bottom: 10px;
    color: ${({ theme }) => theme.palette.white};

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        ${({ theme }) => theme.fonts.projectItem.headline};
    }
`;
