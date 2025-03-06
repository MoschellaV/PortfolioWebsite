import Head from "next/head";
import React, { useEffect } from "react";
import { Footer } from "@/components";
import { Box, useTheme } from "@mui/material";
import CV from "@/components/CV";

export default function Home() {
    const theme = useTheme();

    useEffect(() => {
        // Change body background color
        document.body.style.backgroundColor = "#171717";

        return () => {
            // Reset to default when leaving
            document.body.style.backgroundColor = "";
        };
    }, []);

    return (
        <>
            <Head>
                <title>CV | Vince Moschella</title>
                <meta name="description" content="Check out my CV and what I've accomplished!" />
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

                <meta name="theme-color" content="#171717" />
            </Head>
            <main>
                <Box sx={{ backgroundColor: theme.palette.primary.main }}>
                    <CV />
                    <Footer whiteFont={true} marginTop={6} />
                </Box>
            </main>
        </>
    );
}
