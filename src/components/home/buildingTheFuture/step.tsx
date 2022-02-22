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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        display: block;
    }
`;
const Image = styled.img`
    width: 40%;
    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        width: 80%;
    }
`;
const Title = styled.h2`
    ${({ theme }) => theme.fonts.h2};
`;
const Description = styled.p`
    ${({ theme }) => theme.fonts.paragraph};
    text-align: center;
    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        text-align: left;
    }
`;
