import { useEffect } from "react";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

const ScrollToTop: React.FC = ({ children }) => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        console.log(window.location);
        if (!window.location.hash.includes("news")) {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return <>{children}</>;
};

export default ScrollToTop;
