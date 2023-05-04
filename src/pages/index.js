import Head from "next/head";
import React, { useState, useEffect } from "react";
import {
    HeroSection,
    AboutSection,
    ExperienceSection,
    LoadingPage,
    ProjectsSection,
    ContactSection,
    FadeInWrapper,
    Footer,
} from "@/components";

export default function Home() {
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
                <meta
                    name="description"
                    content="Hey, I'm an aspiring full stack developer and a Computer Science student, with a passion for cooking up innovative digital solutions!"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                {/* og tags */}
                <meta property="og:title" content="Vince Moschella's Personal Website" />
                <meta property="og:description" content="Hey, check out my portfolio website!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.vincemoschella.com" />
                <meta property="og:image" content="https://www.vincemoschella.com/images/og-image.png" />
                <meta property="og:image:alt" content="Logo of VM initials" />
                <meta property="og:site_name" content="vincemoschella.com" />

                <meta name="theme-color" content="#f6f6f6" />
            </Head>
            <main>
                {!removeLoadingPage && <LoadingPage startFadeOut={startFadeOut} />}

                <HeroSection setSceneLoaded={setSceneLoaded} />
                <FadeInWrapper>
                    <AboutSection />
                </FadeInWrapper>
                <ExperienceSection />
                <ProjectsSection />
                <ContactSection />
                <Footer />
            </main>
        </>
    );
}
