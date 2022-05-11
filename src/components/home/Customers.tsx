import { Customer } from "api/storyblok";
import React from "react";
import { getCustomers } from "../../api/storyblok";
import styled from "styled-components";
import { useAppSelector } from "redux/hooks";
import { Paragraph, Variants } from "components/Components.sc";

import "swiper/css";
import "swiper/css/autoplay";
import { SwiperSlide } from "swiper/react";
import { CustomSwiper } from "./HomeStage";

export const Customers: React.FC = () => {
    const [customers, setCustomers] = React.useState<Customer[]>([]);
    const theme = useAppSelector((state) => state.themeToggle.color);
    const [currentWindowWidth, setCurrentWindowWidth] = React.useState<number>(0);

    React.useEffect(() => {
        (async () => {
            const _customers = await getCustomers();

            if (_customers) {
                setCustomers(_customers);
            }
        })();

        setCurrentWindowWidth(window.innerWidth);

        window.addEventListener("resize", () => {
            setCurrentWindowWidth(window.innerWidth);
        });
    }, []);

    return (
        <CustomSwiper
            padding="0"
            margin="0"
            variant={theme}
            autoplay={{
                delay: 2000,
            }}
            loop={true}
            slidesPerView={currentWindowWidth >= 700 ? 8 : 2}
        >
            {customers.map((customer, index) => (
                <SwiperSlide key={index}>
                    <SwiperSlideContent imageUrl={customer.image.filename}>
                        <Overlay>
                            <OverlayContent>
                                <OverlayContentHeadline>
                                    <Gradient color={theme} />
                                </OverlayContentHeadline>
                                <OverlayParagraph color="white" textAlign="left">
                                    {customer.name}
                                </OverlayParagraph>
                            </OverlayContent>
                        </Overlay>
                    </SwiperSlideContent>
                </SwiperSlide>
            ))}
        </CustomSwiper>
    );
};

interface SwiperSlideContentProps {
    imageUrl: string;
}

const SwiperSlideContent = styled.div<SwiperSlideContentProps>`
    background: url(${({ imageUrl }) => imageUrl});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 175px;
    position: relative;
    height: 150px;
    -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
    filter: grayscale(1);

    &:hover {
        div {
            display: flex;
        }
    }

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        height: 150px;
        width: 200px;
    }
`;

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000000b5;
    flex-direction: column;
    justify-content: flex-end;
    display: none;

    color: ${({ theme }) => theme.palette.white};
`;

interface GradientProps {
    color: Variants;
}

const Gradient = styled.div<GradientProps>`
    display: none;

    @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
        background: ${({ theme, color }) => theme.palette[color]};
        height: 1px;
        width: 50px;
        margin-top: 8px;
        margin-right: 10px;
        display: block;
    }
`;

const OverlayContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

const OverlayContentHeadline = styled.div`
    display: flex;
    flex-direction: row;
`;

const OverlayParagraph = styled(Paragraph)`
    font-weight: 700 !important;
`;
