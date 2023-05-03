import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { UserDataProvider, ScrollYProvider, theme } from "@/context/providers";
import "@/styles/globals.css";
import { Footer, Navbar, NavbarWrapper } from "@/components";

export default function App({ Component, pageProps }) {
    return (
        <>
            <UserDataProvider>
                <ScrollYProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <NavbarWrapper>
                            <Component {...pageProps} />
                        </NavbarWrapper>
                    </ThemeProvider>
                </ScrollYProvider>
            </UserDataProvider>
            <Analytics />
        </>
    );
}
