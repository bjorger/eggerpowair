import React from "react";
import { Headline, Eyebrow, HeadlineMain } from "components/headline";
import PageWrap from "components/pageWrap";

const WhereWeWork: React.FC = () => {
    return (
        <PageWrap variant="light">
            <Headline>
                <Eyebrow>Where we work</Eyebrow>
                <HeadlineMain></HeadlineMain>
            </Headline>
        </PageWrap>
    );
};

export default WhereWeWork;
