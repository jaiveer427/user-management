import { useState,useEffect} from "react";

const useWidthDetector = () => {

    const [width, setWidth] = useState();

    useEffect(() => {
        const measureWidth = () => {
            let wid = window.innerWidth;
            setWidth(wid);
        }
        window.addEventListener("resize", measureWidth);
        return (() => {
            window.removeEventListener("resize", measureWidth);
        });

    }, [width]);

    return width;
}
export default useWidthDetector;