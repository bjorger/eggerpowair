import React from "react";
import * as SC from "components/components.sc";

interface PageWrapProps {
    variant: "dark" | "light";
    hideOnMobile?: boolean;
    minHeight?: string;
    padding?: string;
}

const PageWrap: React.FC<PageWrapProps> = ({
    variant,
    children,
    hideOnMobile,
    minHeight,
    padding,
}) => {
    return (
        <SC.Container
            variant={variant}
            minHeight={minHeight}
            hideOnMobile={hideOnMobile}
            padding={padding}
        >
            <SC.Content>{children}</SC.Content>
        </SC.Container>
    );
};

export default PageWrap;
