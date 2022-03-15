import React from "react";
import { PageWrap } from "components/page";
import styled from "styled-components";
import { HeadlineMain } from "components/headline";
import { useForm } from "react-hook-form";
import { TextField, Button, Paper } from "@mui/material";

const ContactUs: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //const onSubmit = (data) => console.log(data);

    return (
        <PageWrap variant="white">
            <ContactWrapper>
                <LeftArea>
                    <CallUsCard>
                        <Headline>Ruf uns an:</Headline>
                        <Paragraph>
                            +43 (0)6225 288 10 <br />
                            sowie kostenlos aus ganz Europa:
                            <br />
                            00 800-2532 6464
                            <br /> 00 800-CLEANING
                        </Paragraph>
                        <Headline>E-Mail:</Headline>
                        <Paragraph>office@EggerPowAir.com</Paragraph>
                    </CallUsCard>
                    <CallUsCard>
                        <Headline>Reinigungszeiten</Headline>
                        <Paragraph>
                            24 Stunden am Tag, 7 Tage die <br /> Woche (24/7)
                        </Paragraph>
                        <Headline>Adresse</Headline>
                        <Paragraph>
                            Egger PowAir Cleaning GmbH <br /> Pebering-Straß 21 5301 Eugendorf / <br /> Salzburg Österreich
                        </Paragraph>
                    </CallUsCard>
                </LeftArea>
                <RightArea>
                    <CallUsCard>
                        <HeadlineMain color="orange">Trete mit uns in Kontakt</HeadlineMain>
                        <Form>
                            <FormInput gridarea="top1" label="Name" />
                            <FormInput gridarea="top2" label="E-Mail" />
                            <FormInput gridarea="mid1" label="Thema" />
                            <FormInput multiline gridarea="mid2" placeholder="Nachricht" rows={7} />
                            <FormButton gridarea="bottom">Absenden</FormButton>
                        </Form>
                    </CallUsCard>
                </RightArea>
            </ContactWrapper>
        </PageWrap>
    );
};

export default ContactUs;

const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
`;

const LeftArea = styled.div`
    grid-column: 1 / span 4;
`;

const RightArea = styled.div`
    align-self: center;
    grid-column: 7 / span 6;
`;

const CallUsCard = styled.div`
    border-radius: 36px;
    padding: 48px 64px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    margin: 30px 0;
`;

const Headline = styled.h2`
    ${({ theme }) => theme.fonts.h2}
`;

const Paragraph = styled.p`
    ${({ theme }) => theme.fonts.paragraph}
`;

const Form = styled(Paper)`
    box-shadow: none !important;
    margin-top: 30px;
    display: grid;
    gap: 36px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "top1 top2"
        "mid1 mid1"
        "mid2 mid2"
        "bottom bottom";
`;

interface FormInputProps {
    gridarea: string;
}

const FormInput = styled(TextField)<FormInputProps>`
    grid-area: ${({ gridarea }) => gridarea};
    padding: 12px 24px;
    background: ${({ theme }) => theme.palette.grey2};
`;

const FormButton = styled(Button)<FormInputProps>`
    grid-area: ${({ gridarea }) => gridarea};
    ${({ theme }) => theme.fonts.button};
    background: ${({ theme }) => theme.palette.orange} !important;
    color: ${({ theme }) => theme.palette.white} !important;
    border-radius: 4px;
`;
