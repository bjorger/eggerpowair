import React from "react";
import * as SC from "components/components.sc";

interface PageWrapProps {
    variant: "dark" | "light";
    hideOnMobile?: boolean;
}

const PageWrap: React.FC<PageWrapProps> = ({
    variant,
    children,
    hideOnMobile,
}) => {
    return (
        <SC.Container variant={variant} hideOnMobile={hideOnMobile}>
            <SC.Content>{children}</SC.Content>
        </SC.Container>
    );
};

export default PageWrap;
