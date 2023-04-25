import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useScrollY } from "@/context/providers";
import styles from "@/styles/Hero.module.css";
import { HeroModel } from "@/components";
import { Box, Typography, useTheme } from "@mui/material";

export default function Home() {
    const theme = useTheme();
    const scrollY = useScrollY();
    const [opacityMainText, setOpacityMainText] = useState(1);
    const [opacityScrollText, setOpacityScrollText] = useState(0.5);

    const handleScrollForOpacity = (scrollY, maxOpacity, scrollRange, setValue) => {
        const newOpacity = Math.max(0, maxOpacity - scrollY / scrollRange);

        setValue(newOpacity);
    };

    useEffect(() => {
        const onScroll = () => {
            handleScrollForOpacity(scrollY, 0.5, 150, setOpacityScrollText);
            handleScrollForOpacity(scrollY, 1, 250, setOpacityMainText);
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [scrollY]);

    return (
        <>
            <Head>
                <title>Vince Moschella</title>
                <meta name="description" content="Vince Moschella Portfolio Website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Box
                    sx={{
                        display: "flex",
                        width: {
                            xs: "100%",
                            md: "60%",
                            lg: "45%",
                        },
                        height: "100vh  ",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            ml: "3rem",
                            zIndex: 10,
                            opacity: opacityMainText,
                        }}
                    >
                        <Typography
                            component="h1"
                            variant="h1"
                            sx={{
                                mt: 3,
                                letterSpacing: "0.4rem",
                                color: "transparent",
                                "-webkit-text-stroke-width": "3px",
                                "-webkit-text-stroke-color": theme.palette.secondary.main,
                            }}
                        >
                            Sup, <span style={{ "-webkit-text-stroke-color": theme.palette.orange.main }}>hire</span>
                            <br />
                            me please
                        </Typography>
                        <Typography component="p" variant="h4" sx={{ mt: 3 }}>
                            Software Developer and <br />
                            Student /
                        </Typography>
                    </Box>
                </Box>
                <HeroModel />
                <Box id="about">
                    <h1>about</h1>
                </Box>
                <Box
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "20px",
                        display: "flex",
                        position: "absolute",
                        top: "auto",
                        bottom: "0%",
                        left: "0%",
                        right: "0%",
                    }}
                >
                    <Typography
                        component="p"
                        variant="h6"
                        sx={{ mt: 3, color: theme.palette.secondary.main, opacity: opacityScrollText }}
                    >
                        scroll to explore
                    </Typography>
                </Box>
            </main>
        </>
    );
}
