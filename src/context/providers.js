import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { createTheme } from "@mui/material/styles";
import useUserDataHook from "@/hooks/userDataHook";

// CONTEXT PROVIDERS
// user data context - this context's value is updated in via a custom hook
const UserDataContext = createContext(null);

export const UserDataProvider = ({ children }) => {
    const userData = useUserDataHook();

    return <UserDataContext.Provider value={userData}>{children}</UserDataContext.Provider>;
};

export const useUserData = () => {
    return useContext(UserDataContext);
};

// scroll Y context
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
        blue: {
            main: "#64DCED",
        },
        red: {
            main: "#FF1A05",
            light: "#EC6A5E",
        },
        green: {
            main: "#0EA900",
            light: "#61C554",
        },
        yellow: {
            light: "#F4BF4F",
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
            fontSize: "clamp(2.6rem, 5.35vw, 8.8rem)",
            fontWeight: 800,
            letterSpacing: "0.4rem",
            color: "transparent",
            WebkitTextStrokeWidth: "3px",
            WebkitTextStrokeColor: "#F6F6F6",
        },
        h2: {
            fontSize: 100,
            fontWeight: 800,
            lineHeight: 1.5,
            letterSpacing: "0.6rem",
            color: "transparent",
            WebkitTextStrokeWidth: "3px",
            WebkitTextStrokeColor: "#fff",
        },
        h3: {
            fontSize: 40,
            fontWeight: 800,
            lineHeight: 1.5,
            letterSpacing: "0.3rem",
            color: "transparent",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#171717",
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
        companyNameText: {
            fontSize: 35,
            fontWeight: 400,
            color: "#171717",
        },
        jobSubTitleText: {
            fontFamily: "Roboto, sans-serif",
            fontSize: 26,
            fontWeight: 800,
            color: "#171717",
        },
        jobDescriptionText: {
            fontFamily: "Roboto, sans-serif",
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
            fontSize: "clamp(0.8rem, 1vw, 1.15rem)",
            opacity: 0.7,
            lineHeight: 2,
        },
        terminalText: {
            fontSize: "clamp(0.75rem, 1.15vw, 1.4rem)",
            lineHeight: 3,
            color: "#fff",
        },
        CVHeader: {
            fontFamily: "Inter, sans-serif",
            fontSize: 80,
            fontWeight: 600,
            lineHeight: 1,
            color: "#fff",
            [`@media (max-width:600px)`]: {
                fontSize: 60,
            },
            [`@media (max-width:480px)`]: {
                fontSize: 40,
            },
        },
        CVText: {
            fontFamily: "Inter, sans-serif",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.5,
            color: "#fff",
            [`@media (max-width:900px)`]: {
                fontSize: 14,
            },
            [`@media (max-width:600px)`]: {
                fontSize: 12,
            },
        },
        CVSmallText: {
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#fff",
            [`@media (max-width:900px)`]: {
                fontSize: 10,
            },
        },
        CVTitle: {
            fontFamily: "Inter, sans-serif",
            fontSize: 20,
            fontWeight: 700,
            lineHeight: 1.4,
            color: "#fff",
            [`@media (max-width:900px)`]: {
                fontSize: 16,
            },
            [`@media (max-width:600px)`]: {
                fontSize: 14,
            },
        },
    },
});

// hero model
const SplineHeroContext = createContext(null);

export const useSplineHero = () => useContext(SplineHeroContext);

export const SplineHeroProvider = ({ children }) => {
    const splineHeroViewerRef = useRef(null);

    return <SplineHeroContext.Provider value={splineHeroViewerRef}>{children}</SplineHeroContext.Provider>;
};
