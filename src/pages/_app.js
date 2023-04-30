import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { UserDataProvider, ScrollYProvider, theme } from "@/context/providers";
import "@/styles/globals.css";
import { Navbar } from "@/components";

export default function App({ Component, pageProps }) {
    return (
        <>
            <UserDataProvider>
                <ScrollYProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Navbar />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </ScrollYProvider>
            </UserDataProvider>
        </>
    );
}
