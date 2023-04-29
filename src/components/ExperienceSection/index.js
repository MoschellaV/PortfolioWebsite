import React from "react";
import Image from "next/image";
import { Box, useTheme, Typography } from "@mui/material";
import WorkCard from "./WorkCard";

const ExperienceSection = () => {
    const theme = useTheme();

    const jobInfo = [
        {
            companyName: "KnockNow",
            companyWebsite: "https://www.knocknow.ca/",
            imageUrl: "/images/companyImages/KnockNowLogo.svg",
            altText: "KnockNowLogo",
            positionTitle: {
                orangePortion: "Full Stack",
                blackPortion: "Software Developer",
            },
            technologies: "React, Flask, SQL, Scripting",
            descriptionText:
                "Nullam eu pellentesque augue. Cras purus libero, pulvinar nec augue sit amet, dictum cursus urna. Nullam venenatis diam tellus, eget sollicitud leo fringilla a. Sed convallis gravida justo ac eleifend. Mauris viverra et tortor in maximus.",
            jobDuration: "Jan 2023 - May 2023",
        },
    ];

    return (
        <>
            <Box
                id="experience"
                sx={{
                    position: "relative",
                    width: "100vw",
                    pt: 1,
                    pb: 1,
                    backgroundColor: theme.palette.primary.main,
                }}
            >
                <Typography
                    component="p"
                    variant="h3"
                    sx={{
                        ml: -20,
                        mr: -500,
                        "-webkit-text-stroke-color": theme.palette.secondary.main,
                        opacity: 0.1,
                    }}
                >
                    Experience Experience Experience Experience Experience Experience <br />
                    Experience Experience Experience Experience Experience Experience <br />
                    Experience Experience Experience Experience Experience Experience <br />
                    Experience Experience Experience Experience Experience Experience
                </Typography>
                <Typography
                    component="h3"
                    variant="h2"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    Experience
                </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
                <WorkCard jobInfo={jobInfo} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "20vw", m: 5 }}>
                <Typography
                    variant="h3"
                    component="p"
                    sx={{
                        opacity: 0.2,
                        color: theme.palette.primary.main,
                        fontWeight: 400,
                        "-webkit-text-stroke-width": 0,
                        textAlign: "center",
                    }}
                >
                    more experience to come... hopefully
                </Typography>
            </Box>
        </>
    );
};

export default ExperienceSection;
