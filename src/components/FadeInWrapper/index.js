import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styles from "@/styles/FadeInWrapper.module.css";

const FadeInWrapper = (props) => {
    const [isVisible, setVisible] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const domRef = React.useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setVisible(entry.isIntersecting);
            });
        });

        const currentElement = domRef.current;
        if (currentElement) observer.observe(currentElement);

        return () => {
            if (currentElement) observer.unobserve(currentElement);
        };
    }, []);

    useEffect(() => {
        let timeout;

        if (isVisible) {
            timeout = setTimeout(() => {
                setHasBeenVisible(true);
            }, 1810); // time in ms the fade animation will take
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [isVisible]);

    return (
        <Box
            className={`${!hasBeenVisible ? styles["fade-in-section"] : ""} ${isVisible ? styles["is-visible"] : ""}`}
            ref={domRef}
        >
            {props.children}
        </Box>
    );
};

export default FadeInWrapper;
