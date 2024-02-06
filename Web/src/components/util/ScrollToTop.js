import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [location.pathname])

  return(
    <React.Fragment>
        {children}
    </React.Fragment>
    )
}

export default ScrollToTop;