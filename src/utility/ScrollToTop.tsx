import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop: React.FC = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        console.log(window.location);
        if (!window.location.hash.includes("news")) {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return <>{children}</>;
};

export default ScrollToTop;