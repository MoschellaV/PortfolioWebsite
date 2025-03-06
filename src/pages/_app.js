import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { UserDataProvider, ScrollYProvider, theme, SplineHeroProvider } from "@/context/providers";
import "@/styles/globals.css";
import { Footer, Navbar, NavbarWrapper } from "@/components";

export default function App({ Component, pageProps }) {
    return (
        <>
            <UserDataProvider>
                <ScrollYProvider>
                    <SplineHeroProvider>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </SplineHeroProvider>
                </ScrollYProvider>
            </UserDataProvider>
            <Analytics />
        </>
    );
}
