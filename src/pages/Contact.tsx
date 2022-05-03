import { PageContainer } from "components/page";
import React from "react";
import ContactUs from "components/contact/Contact";

const Contact: React.FC = () => {
    return (
        <PageContainer eyebrow="Wir sind für sie da" title="Kontakt">
            <ContactUs />
        </PageContainer>
    );
};

export default Contact;
