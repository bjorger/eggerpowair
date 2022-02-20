import React from "react";
import * as SC from "components/components.sc";

interface PageWrapProps {
    variant: "dark" | "light";
}

const PageWrap: React.FC<PageWrapProps> = ({ variant, children }) => {
    return (
        <SC.Container variant={variant}>
            <SC.Content>{children}</SC.Content>
        </SC.Container>
    );
};

export default PageWrap;
