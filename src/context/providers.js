import React, { createContext, useContext, useEffect, useState } from "react";
import { createTheme } from "@mui/material/styles";

// CONTEXT PROVIDERS
const ScrollYContext = createContext(0);

export const ScrollYProvider = ({ children }) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <ScrollYContext.Provider value={scrollY}>{children}</ScrollYContext.Provider>;
};

export const useScrollY = () => {
    return useContext(ScrollYContext);
};

// THEME
export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 950,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: "#171717",
        },
        secondary: {
            main: "#F6F6F6",
        },
        orange: {
            main: "#BC6E18",
            bright: "#E48115",
        },
        black: {
            main: "#000",
        },
    },
    typography: {
        fontFamily: "MonumentExtended, sans-serif",
        button: {
            textTransform: "none",
        },
        h1: {
            fontSize: "clamp(4rem, 5.4vw, 9rem)",
            fontWeight: 800,
            letterSpacing: "0.4rem",
            color: "transparent",
            "-webkit-text-stroke-width": "3px",
            "-webkit-text-stroke-color": "#F6F6F6",
        },
        h2: {
            fontSize: 100,
            fontWeight: 800,
            lineHeight: 1.5,
            letterSpacing: "0.6rem",
            color: "transparent",
            "-webkit-text-stroke-width": "3px",
            "-webkit-text-stroke-color": "#fff",
        },
        h3: {
            fontSize: 40,
            fontWeight: 800,
            lineHeight: 1.5,
            letterSpacing: "0.3rem",
            color: "transparent",
            "-webkit-text-stroke-width": "2px",
            "-webkit-text-stroke-color": "#171717",
        },
        h4: {
            fontSize: 22,
            color: "#F6F6F6",
        },
        h6: {
            fontSize: 16,
        },
        p: {
            fontSize: "clamp(0.9rem, 1.15vw, 1.4rem)",
            lineHeight: 2,
        },
        jobTitleText: {
            fontSize: 30,
            fontWeight: 400,
            color: "#171717",
        },
        jobSubTitleText: {
            fontSize: 20,
            fontWeight: 400,
            color: "#171717",
        },
        projectTitle: {
            fontSize: 40,
            fontWeight: 400,
            color: "#171717",
        },
        projectTechnology: {
            fontSize: 25,
            color: "#E48115",
        },
        projectPoints: {
            fontSize: "clamp(0.9rem, 1.05vw, 1.2rem)",
            opacity: 0.7,
            lineHeight: 2,
        },
    },
});
