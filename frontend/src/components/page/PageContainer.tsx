import { StickyThemeToggle } from "components/themeToggle";
import React from "react";
import Stage from "./Stage";

interface PageContainerProps {
    eyebrow?: string;
    title?: string;
    hideDefaultStage?: boolean;
    hidePartyBus?: boolean;
    customPartyBus?: string;
    hideSwipeOnMobile?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({
    children,
    eyebrow,
    title,
    hideDefaultStage,
    hidePartyBus,
    customPartyBus,
    hideSwipeOnMobile,
}) => {
    return (
        <main style={{ position: "relative" }} id="page-wrap">
            {!hideDefaultStage && (
                <Stage
                    hideSwipeOnMobile={hideSwipeOnMobile}
                    customImage={customPartyBus}
                    hidePartyBus={hidePartyBus}
                    eyebrow={eyebrow || ""}
                    title={title || ""}
                />
            )}
            {children}
            <StickyThemeToggle />
        </main>
    );
};

export default PageContainer;
