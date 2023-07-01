import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import WorkCard from "./WorkCard";

const ExperienceSection = () => {
    const theme = useTheme();

    const jobInfo = [
        {
            companyName: "realsaige.com",
            companyWebsite: "https://www.realsaige.com/",
            imageUrl: "/images/companyImages/SaigeLogo.svg",
            altText: "SaigeLogo",
            positionTitle: {
                orangePortion: "Full Stack",
                blackPortion: "Software Developer",
            },
            technologies: "React, Flask, SQL, AWS, Scripting",
            descriptionText:
                "I learned so much at Saige and took on a lot of responsibility. I led the redesign of the company's flagship app, working with the design team. I got to work closely with data scientists and integrated AI-driven research into multiple aspects of the app. Being proficient in both front-end and back-end technologies allowed me to substantially contribute to the start up's growth.",
            jobDuration: "Jan 2023 - Present",
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
                        left: { xs: "51%", sm: "50%" },
                        transform: "translate(-50%, -50%)",
                        "-webkit-text-stroke-width": { xs: "1.5px", md: "3px" },
                        fontSize: { xs: "clamp(1rem, 9vw, 10rem)", sm: 65, md: 100 },
                    }}
                >
                    Experience
                </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
                {/* handles rendering each job */}
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
                    more to come...
                </Typography>
            </Box>
        </>
    );
};

export default ExperienceSection;
