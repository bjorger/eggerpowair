import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop: React.FC = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        if (window.location.hash.includes("category") || window.location.hash.includes("news-article")) {
            window.scrollTo(0, 700);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return <>{children}</>;
};

export default ScrollToTop;
