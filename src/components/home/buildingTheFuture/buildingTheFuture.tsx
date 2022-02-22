import React from "react";
import PageWrap from "components/pageWrap";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import { useAppSelector } from "redux/hooks";
import ColdPowair from "assets/cold-powair.png";
import HotPowair from "assets/hot-powair.png";
import { Grid } from "components/grid";
import Hot from "./hot";
import Cold from "./cold";
import styled from "styled-components";

const BuildingTheFuture: React.FC = () => {
    const theme = useAppSelector((state) => state.themeToggle.color);

    return (
        <PageWrap variant="light">
            <Headline>
                <Eyebrow textColor="black"> Building the future</Eyebrow>
                <HeadlineMain>
                    {theme === "blue" ? (
                        <Image src={ColdPowair} alt="" />
                    ) : (
                        <Image src={HotPowair} alt="" />
                    )}
                </HeadlineMain>
                <Grid>{theme === "blue" ? <Cold /> : <Hot />}</Grid>
            </Headline>
        </PageWrap>
    );
};

export default BuildingTheFuture;

const Image = styled.img`
    width: 80%;
    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.md}px`}) {
        width: auto;
    }
`;
