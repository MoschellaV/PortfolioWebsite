import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";

import HeroSection from "@/components/HeroSection";
import { AboutSection, LoadingPage } from "@/components";

export default function Home() {
    const theme = useTheme();

    // for loading main scene
    const [sceneLoaded, setSceneLoaded] = useState(false);
    const [startFadeOut, setStartFadeOut] = useState(false);
    const [removeLoadingPage, setRemoveLoadingPage] = useState(false);

    useEffect(() => {
        let fadeOutTimer;
        let removeTimer;

        if (sceneLoaded) {
            fadeOutTimer = setTimeout(() => {
                setStartFadeOut(true);
            }, 2000); // tells loading page to start fading after X seconds

            removeTimer = setTimeout(() => {
                setRemoveLoadingPage(true);
            }, 4000); // time value X, for loading page's opacity fading out
        }

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(removeTimer);
        };
    }, [sceneLoaded]);

    return (
        <>
            <Head>
                <title>Vince Moschella</title>
                <meta name="description" content="Vince Moschella Portfolio Website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {!removeLoadingPage && <LoadingPage startFadeOut={startFadeOut} />}

                <HeroSection setSceneLoaded={setSceneLoaded} />
                <AboutSection />
            </main>
        </>
    );
}
