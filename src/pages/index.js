import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Hero.module.css";
import { HeroModel } from "@/components";
import { Box } from "@mui/material";
import { useScrollY } from "@/context/providers";

export default function Home() {
    const scrollY = useScrollY();
    const [shouldScrollOff, setShouldScrollOff] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            scrollY >= 1000 ? setShouldScrollOff(true) : setShouldScrollOff(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Vince Moschella</title>
                <meta name="description" content="Vince Moschella Portfolio Website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <HeroModel />
                <Box id="about">
                    <h1>about</h1>
                </Box>
            </main>
        </>
    );
}
