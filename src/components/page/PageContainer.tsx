import { StickyThemeToggle } from "components/themeToggle";
import React from "react";
import Stage from "./Stage";

interface PageContainerProps {
    eyebrow?: string;
    title?: string;
    hideDefaultStage?: boolean;
    hidePartyBus?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, eyebrow, title, hideDefaultStage, hidePartyBus }) => {
    return (
        <main style={{ position: "relative" }} id="page-wrap">
            {!hideDefaultStage && <Stage hidePartyBus={hidePartyBus} eyebrow={eyebrow || ""} title={title || ""} />}
            {children}
            <StickyThemeToggle />
        </main>
    );
};

export default PageContainer;
