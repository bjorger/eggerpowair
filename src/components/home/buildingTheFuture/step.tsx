import React from "react";
import styled from "styled-components";

interface StepProps {
    img: string;
    title: string;
    description: string;
}

const Step: React.FC<StepProps> = ({ img, title, description }) => {
    return (
        <Container>
            <Image src={img} alt="" />
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    );
};

export default Step;

const Container = styled.div``;
const Image = styled.img``;
const Title = styled.h2`
    ${({ theme }) => theme.fonts.gridItem.headline};
`;
const Description = styled.p`
    ${({ theme }) => theme.fonts.paragraph};
`;
