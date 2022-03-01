import { StickyThemeToggle } from "components/themeToggle";
import React from "react";
import Stage from "./Stage";

interface PageContainerProps {
    eyebrow?: string;
    title?: string;
    hideDefaultStage?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, eyebrow, title, hideDefaultStage }) => {
    return (
        <main style={{ position: "relative" }} id="page-wrap">
            {!hideDefaultStage && <Stage eyebrow={eyebrow || ""} title={title || ""} />}
            {children}
            <StickyThemeToggle />
        </main>
    );
};

export default PageContainer;
