import React from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { UserDataProvider, ScrollYProvider, theme, SplineHeroProvider } from "@/context/providers";
import "@/styles/globals.css";
import { Footer, Navbar, NavbarWrapper } from "@/components";

const GA_MEASUREMENT_ID = "G-Y55E5EPTZ4";

function VercelSpeedInsights() {
    const router = useRouter();
    return (
        <SpeedInsights
            framework="next"
            route={router.isReady ? router.pathname : undefined}
        />
    );
}

export default function App({ Component, pageProps }) {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}');
                `}
            </Script>
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
            <VercelSpeedInsights />
        </>
    );
}
