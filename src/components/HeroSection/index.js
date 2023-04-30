import React, { useState, useEffect } from "react";
import { useScrollY, useUserData } from "@/context/providers";
import { HeroModel, UserDataEmail } from "@/components";
import { Box, Typography, useTheme } from "@mui/material";

import { renderToString } from "react-dom/server";
import { currentDateTime } from "@/helper/helperFunctions";

import { sendEmail } from "@/pages/api/outboundRequests";

const HeroSection = ({ setSceneLoaded }) => {
    const theme = useTheme();
    const scrollY = useScrollY();
    const { userData } = useUserData();
    const [opacityMainText, setOpacityMainText] = useState(1);
    const [opacityScrollText, setOpacityScrollText] = useState(0.5);

    // send user data
    useEffect(() => {
        const sendUserData = async (emailContent) => {
            sendEmail(emailContent).catch((err) => {
                console.error(err);
            });
        };

        if (userData) {
            let timeAccessed = currentDateTime();

            let email = {
                name: `UserActivity @ ${timeAccessed}`,
                email: "",
                message: renderToString(<UserDataEmail userData={userData} timeAccessed={timeAccessed} />),
            };

            sendUserData(email);
        }
    }, [userData]);

    const handleScrollForOpacity = (scrollY, maxOpacity, scrollRange, setValue) => {
        const newOpacity = Math.max(0, maxOpacity - scrollY / scrollRange);

        setValue(newOpacity);
    };

    // handle when user scrolls
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
            <Box
                id="home"
                sx={{
                    display: "flex",
                    width: {
                        xs: "100%",
                        md: "60%",
                        lg: "45%",
                    },
                    height: "100vh",
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
                    <Typography component="h1" variant="h1" sx={{ mt: 3 }}>
                        Sup, <span style={{ "-webkit-text-stroke-color": theme.palette.orange.bright }}>hire</span>
                        <br />
                        me please
                    </Typography>
                    <Typography component="p" variant="h4" sx={{ mt: 3 }}>
                        Software Developer and <br />
                        Student /
                    </Typography>
                </Box>
            </Box>
            <HeroModel setSceneLoaded={setSceneLoaded} />
            <Box
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    mb: "20px",
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
        </>
    );
};

export default HeroSection;
