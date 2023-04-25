import React, { createContext, useContext, useEffect, useState } from "react";
import { createTheme } from "@mui/material/styles";

// CONTEXT PROVIDERS
const ScrollYContext = createContext(0);

export const ScrollYProvider = ({ children }) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            console.log(window.scrollY);
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
    },
    typography: {
        fontFamily: "MonumentExtended, sans-serif",
        button: {
            textTransform: "none",
        },
        h1: {
            fontWeight: 800,
        },
        h4: {
            fontSize: 22,
        },
        h6: {
            fontSize: 16,
        },
    },
});
