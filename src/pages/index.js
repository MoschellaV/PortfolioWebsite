import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Hero.module.css";
import { HeroModel } from "@/components";
import { Box, Typography } from "@mui/material";
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
                                "-webkit-text-stroke-color": "#F6F6F6",
                            }}
                        >
                            Sup, <span style={{ "-webkit-text-stroke-color": "#BC6E18" }}>hire</span> <br />
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
            </main>
        </>
    );
}
