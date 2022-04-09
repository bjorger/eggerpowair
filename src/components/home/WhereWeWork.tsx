import React from "react";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import { PageWrap } from "components/page";
import styled from "styled-components";
import { ColoredSpan, Variants } from "./../components.sc";
import { Button } from "./../components.sc";
import { useAppSelector } from "redux/hooks";
import { InfoWindow, Marker, GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

interface Location {
    street: string;
    zip: string;
    city: string;
    state: string;
    country: string;
    latLng: {
        lat: number;
        lng: number;
    };
}

const locations: Location[] = [
    {
        street: "Pebering-Straß 21",
        zip: "5301",
        city: "Eugendorf",
        state: "Salzburg",
        country: "Österreich",
        latLng: {
            lat: 47.855397349780475,
            lng: 13.117275467746438,
        },
    },
    {
        street: "Kirchham 84",
        zip: "4891",
        city: "Pöndorf",
        state: "Oberösterreich",
        country: "Österreich",
        latLng: {
            lat: 47.99865510863441,
            lng: 13.367644128920887,
        },
    },
    {
        street: "Favoritenstraße 89",
        zip: "1100",
        city: "Wien",
        state: "Wien",
        country: "Österreich",
        latLng: {
            lat: 47.855397349780475,
            lng: 13.117275467746438,
        },
    },
];

const WhereWeWork: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY ? process.env.REACT_APP_GOOGLE_API_KEY : "",
    });

    const [currentLocation, setCurrentLocation] = React.useState<Location>({
        street: "Pebering-Straß 21",
        zip: "5301",
        city: "Eugendorf",
        state: "Salzburg",
        country: "Österreich",
        latLng: {
            lat: 47.855397349780475,
            lng: 13.117275467746438,
        },
    });

    const [marker, setMarker] = React.useState<boolean>(false);
    const [, setMap] = React.useState(null);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    const onSlideChange = (index: number) => {
        setCurrentLocation(locations[index]);
    };

    const containerStyle = {
        width: "100%",
        height: "300px",
    };

    return (
        <PageWrap variant="white" paddingMobile="50px 0 0 0">
            <Headline>
                <Eyebrow textColor="black">Where we work</Eyebrow>
                <HeadlineMain>
                    Mobil in ganz EU-Europa.
                    <ColoredSpan variant={theme}>24/7</ColoredSpan>
                </HeadlineMain>
            </Headline>
            <Content>
                <Swiper
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    onSlideChange={({ activeIndex }) => onSlideChange(activeIndex)}
                >
                    {locations.map((location) => (
                        <SwiperSlide key={location.zip}>
                            <AddressSlide>
                                <AddressSlideContent>
                                    <AddressHeadline color={theme}>Egger PowAir Cleaning GmBH</AddressHeadline>
                                    <p>{location.street}</p>
                                    <p>{location.city}</p>
                                    <p>{location.zip}</p>
                                    <p>{location.state}</p>
                                </AddressSlideContent>
                            </AddressSlide>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Content>
            <MapContainer>
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={currentLocation.latLng}
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
                        <Marker position={currentLocation.latLng} onClick={() => setMarker(!marker)}>
                            {marker && (
                                <InfoWindow onCloseClick={() => setMarker(!marker)}>
                                    <InfoWindowContent>
                                        <h3>Egger PowAir Cleaning GmBH</h3>
                                        <p>{currentLocation.street}</p>
                                        <p>{currentLocation.city}</p>
                                        <p>{currentLocation.zip}</p>
                                        <p>{currentLocation.state}</p>
                                    </InfoWindowContent>
                                </InfoWindow>
                            )}
                        </Marker>
                        <></>
                    </GoogleMap>
                ) : (
                    <></>
                )}
            </MapContainer>
            <Button bordervariant={theme} variant="white" textcolor="black" to="/contact">
                Jetzt kontaktieren
            </Button>
        </PageWrap>
    );
};

export default WhereWeWork;

const Content = styled.div``;

const InfoWindowContent = styled.div`
    h3 {
        margin: 0;
    }
    p {
        margin: 0;
    }
`;

const AddressSlide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
`;

const AddressSlideContent = styled.div`
    border-radius: 10px;
    max-width: 200px;
    box-shadow: ${({ theme }) => `5px 5px 27px ${theme.palette.grey}`};
    padding: 10px 20px;
`;

interface HeadlineProps {
    color: Variants;
}

const AddressHeadline = styled.h3<HeadlineProps>`
    color: ${({ theme, color }) => theme.palette[color]};
`;

const MapContainer = styled.div`
    margin: 0 0 50px 0;
`;
