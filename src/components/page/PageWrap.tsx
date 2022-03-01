import React from "react";
import * as SC from "components/components.sc";

interface PageWrapProps {
    variant: "dark" | "white";
    mobileVariant?: "dark" | "white";
    hideOnMobile?: boolean;
    minHeight?: string;
    padding?: string;
    paddingMobile?: string;
}

const PageWrap: React.FC<PageWrapProps> = ({ variant, mobileVariant, children, hideOnMobile, minHeight, padding, paddingMobile }) => {
    return (
        <SC.Container
            variant={variant}
            mobileVariant={mobileVariant}
            minHeight={minHeight}
            hideOnMobile={hideOnMobile}
            padding={padding}
            paddingMobile={paddingMobile}
        >
            <SC.Content>{children}</SC.Content>
        </SC.Container>
    );
};

export default PageWrap;
