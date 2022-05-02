import React from "react";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import styled from "styled-components";
import { BrowserView, ColoredSpan, MobileView, Variants } from "./../components.sc";
import { Button } from "./../components.sc";
import { useAppSelector } from "redux/hooks";
import { InfoWindow, Marker, GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import haversine from "haversine-distance";

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
        street: "Hanauer Landstraße 291 B",
        zip: "60314",
        city: "Frankfurt am Main",
        state: "Hessen",
        country: "Deutschland",
        latLng: {
            lat: 50.11684831215999,
            lng: 8.726012229103372,
        },
    },
    {
        street: "Flughafenstraße 118",
        zip: "90411",
        city: "Nürnberg",
        state: "Bayern",
        country: "Deutschland",
        latLng: {
            lat: 49.49409847096356,
            lng: 11.071268542580121,
        },
    },
];

const WhereWeWork: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY ? process.env.REACT_APP_GOOGLE_API_KEY : "",
    });
    const [currentLocation, setCurrentLocation] = React.useState<Location>(locations[0]);
    const [marker, setMarker] = React.useState<boolean>(false);
    const [desktopMarkers, setDesktopMarkers] = React.useState<boolean[]>(new Array(locations.length).fill(false));
    const [currentWindowWith, setCurrentWindowWith] = React.useState<number>(window.innerWidth);
    const breakpointMD = 960;
    const [, setMap] = React.useState(null);
    const [userPosition, setUserPosition] = React.useState<{ lat: number; lng: number }>({
        lat: Infinity,
        lng: Infinity,
    });

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    const onSlideChange = (index: number): void => {
        if (window.innerWidth < breakpointMD) {
            setCurrentLocation(locations[index]);
        }
    };

    const onDesktopMarkerChange = (index: number): void => {
        desktopMarkers[index] = !desktopMarkers[index];
        setDesktopMarkers(Object.assign([], desktopMarkers));
    };

    const containerStyle = {
        width: "100%",
        height: "400px",
    };

    React.useEffect(() => {
        window.addEventListener("resize", () => setCurrentWindowWith(window.innerWidth));

        navigator.geolocation.getCurrentPosition((position) => {
            setUserPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });

            let shortestDistance = Infinity;

            locations.forEach((location) => {
                const distance = haversine(position.coords, location.latLng);

                if (distance < shortestDistance) {
                    shortestDistance = distance;
                    setUserPosition(location.latLng);
                }
            });
        });
    }, []);

    return (
        <PageContainer>
            <HeadlineContainer>
                <Headline>
                    <Eyebrow textColor="black">Where we work</Eyebrow>
                    <HeadlineMain>
                        Mobil in ganz EU-Europa.
                        <ColoredSpan variant={theme}>24/7</ColoredSpan>
                    </HeadlineMain>
                </Headline>
            </HeadlineContainer>
            <Content>
                <MapContainer>
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={currentWindowWith >= breakpointMD ? userPosition : currentLocation.latLng}
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
                            <BrowserView>
                                {locations.map((location, index) => {
                                    return (
                                        <Marker
                                            position={location.latLng}
                                            onClick={() => onDesktopMarkerChange(index)}
                                            key={`${location.city}_${index}`}
                                        >
                                            {desktopMarkers[index] === true && (
                                                <InfoWindow onCloseClick={() => onDesktopMarkerChange(index)}>
                                                    <InfoWindowContent>
                                                        <h3>Egger PowAir Cleaning GmBH</h3>
                                                        <p>{location.street}</p>
                                                        <p>{location.city}</p>
                                                        <p>{location.zip}</p>
                                                        <p>{location.state}</p>
                                                    </InfoWindowContent>
                                                </InfoWindow>
                                            )}
                                        </Marker>
                                    );
                                })}
                            </BrowserView>
                            <MobileView>
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
                            </MobileView>

                            <></>
                        </GoogleMap>
                    ) : (
                        <></>
                    )}
                </MapContainer>
                <MobileView>
                    <CustomSwiper
                        variant={theme}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                        }}
                        pagination={{
                            dynamicBullets: false,
                        }}
                        modules={[Pagination]}
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
                    </CustomSwiper>
                </MobileView>
            </Content>
            <MobileView>
                <ButtonContainer>
                    <Button bordervariant={theme} variant="white" textcolor="black" to="/contact">
                        Jetzt kontaktieren
                    </Button>
                </ButtonContainer>
            </MobileView>
        </PageContainer>
    );
};

export default WhereWeWork;

interface CustomSwiperProps {
    variant: Variants;
}

const PageContainer = styled.div`
    margin: 50px 0 0 0;
`;

const CustomSwiper = styled(Swiper)<CustomSwiperProps>`
    position: relative;

    .swiper-pagination-bullet-active {
        background-color: ${({ theme, variant }) => theme.palette[variant]} !important;
    }

    .swiper-pagination-bullet {
        border: 2px solid;
        border-color: ${({ theme, variant }) => theme.palette[variant]};
        background-color: transparent;
    }

    .swiper-slide {
        padding: 0 0 30px 0;
    }
`;

const Content = styled.div`
    margin: 50px 0 0 0;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        display: flex;
        flex-direction: row;
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

const AddressSlide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px 30px 15px 30px;
`;

const AddressSlideContent = styled.div`
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    padding: 10px 20px;
    width: 85%;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        max-width: 200px;
    }
`;

interface HeadlineProps {
    color: Variants;
}

const AddressHeadline = styled.h3<HeadlineProps>`
    color: ${({ theme, color }) => theme.palette[color]};
`;

const MapContainer = styled.div`
    width: 100%;
    position: relative;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        width: 100%;
    }
`;

const HeadlineContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
`;

const ButtonContainer = styled.div`
    margin: 0 20px 30px 20px;
`;
