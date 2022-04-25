import React from "react";
import { PageWrap } from "components/page";
import styled from "styled-components";
import { HeadlineMain } from "components/headline";
import { useForm } from "react-hook-form";
import { TextField, Button, Paper } from "@mui/material";
import { useAppSelector } from "redux/hooks";
import { Variants } from "components/components.sc";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY ? process.env.REACT_APP_GOOGLE_API_KEY : "",
    });
    const [marker, setMarker] = React.useState<boolean>(false);
    const [, setMap] = React.useState(null);
    const [disableSubmitButton, setDisableSubmitButton] = React.useState<boolean>(true);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    const containerStyle = {
        width: "99.8vw",
        height: "532px",
    };

    const center = {
        lat: 47.855397349780475,
        lng: 13.117275467746438,
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onChange = async (value: string | null) => {
        console.log(value);
        const res = await fetch("http://localhost:3005/verify-captcha", {
            method: "POST",
            body: JSON.stringify({
                "g-recaptcha-response": value,
            }),
            headers: { "Content-Type": "application/json" },
        });

        const response = await res.json();
        console.log(response);

        if (response.responseCode === 0) {
            setDisableSubmitButton(false);
        }
    };
    //const onSubmit = (data) => console.log(data);

    return (
        <PageWrap variant="white" padding="0" paddingMobile="0">
            <MapsWrapper>
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={13}
                        onUnmount={onUnmount}
                        options={{
                            fullscreenControl: false,
                            clickableIcons: false,
                            streetViewControl: false,
                            panControl: false,
                            mapTypeControl: false,
                        }}
                    >
                        <Marker position={center} onClick={() => setMarker(!marker)}>
                            {marker && (
                                <InfoWindow onCloseClick={() => setMarker(!marker)}>
                                    <InfoWindowContent>
                                        <h3>Egger PowAir Cleaning GmBH</h3>
                                        <p>Pebering Straß 21</p>
                                        <p>5301 Eugendorf bei Salzburg</p>
                                    </InfoWindowContent>
                                </InfoWindow>
                            )}
                        </Marker>
                        <></>
                    </GoogleMap>
                ) : (
                    <></>
                )}
            </MapsWrapper>
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
                        <Paragraph>24 Stunden am Tag, 7 Tage die Wochen (24/7) in ganz Europa mobil</Paragraph>
                        <Headline>Adresse</Headline>
                        <Paragraph>
                            Europazentrale <br />
                            Egger PowAir Cleaning GmbH <br /> Pebering-Straß 21 5301 Eugendorf / <br /> Salzburg Österreich
                        </Paragraph>
                    </CallUsCard>
                </LeftArea>
                <RightArea>
                    <CallUsCard>
                        <HeadlineMain color={theme}>Trete mit uns in Kontakt</HeadlineMain>
                        <Form>
                            <FormInput gridarea="top1" label="Name" />
                            <FormInput gridarea="top2" label="E-Mail" />
                            <FormInput gridarea="mid1" label="Thema" />
                            <FormInput multiline gridarea="mid2" placeholder="Nachricht" rows={7} />
                            <ReCAPTCHA
                                style={{
                                    gridArea: "captcha",
                                    margin: "5px 0",
                                }}
                                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY ? process.env.REACT_APP_RECAPTCHA_SITE_KEY : ""}
                                onChange={onChange}
                            />
                            <FormButton colors={theme} gridarea="bottom" disabled={disableSubmitButton}>
                                Absenden
                            </FormButton>
                        </Form>
                    </CallUsCard>
                </RightArea>
            </ContactWrapper>
        </PageWrap>
    );
};

export default ContactUs;

const MapsWrapper = styled.div`
    position: absolute;
    left: -5vw;
    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        left: -13vw;
    }
`;

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 0;
    padding-top: 560px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        padding-top: 560px;
        padding-bottom: 50px;
    }
`;

const LeftArea = styled.div`
    grid-column: 1 / span 4;
`;

const RightArea = styled.div`
    align-self: center;
    grid-column: 7 / span 6;
    width: 100%;
`;

const CallUsCard = styled.div`
    border-radius: 36px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    margin: 30px 0;
    padding: 18px 32px;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        padding: 20px 40px;
    }
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
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        display: grid;
        gap: 36px;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "top1 top2"
            "mid1 mid1"
            "mid2 mid2"
            "captcha captcha"
            "bottom bottom";
    }
`;

interface FormInputProps {
    gridarea: string;
}

const FormInput = styled(TextField)<FormInputProps>`
    grid-area: ${({ gridarea }) => gridarea};
    padding: 12px 24px;
    margin: 10px 0 !important;
    background: ${({ theme }) => theme.palette.grey2};

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
        margin: 0 !important;
    }
`;

interface ButtonProps {
    gridarea: string;
    colors: Variants;
}

const FormButton = styled(Button)<ButtonProps>`
    grid-area: ${({ gridarea }) => gridarea};
    ${({ theme }) => theme.fonts.button};
    background: ${({ theme, colors }) => theme.palette[colors]} !important;
    color: ${({ theme }) => theme.palette.white} !important;
    border-radius: 4px;

    &:disabled {
        background-color: ${({ theme }) => theme.palette.grey} !important;
    }
`;

const InfoWindowContent = styled.div`
    h3 {
        margin: 0;
    }
    p {
        margin: 0;
    }
`;