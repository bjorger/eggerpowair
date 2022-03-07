import React from "react";
import { PageWrap } from "components/page";
import styled from "styled-components";

const ContactUs: React.FC = () => {
    return (
        <PageWrap variant="white">
            <ContactWrapper></ContactWrapper>
        </PageWrap>
    );
};

export default ContactUs;

const ContactWrapper = styled.div``;
