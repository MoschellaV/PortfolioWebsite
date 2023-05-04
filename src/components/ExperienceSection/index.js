import React from "react";
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
                "At KnockNow, I had the opportunity to learn and grow as a developer. I played a pivotal role in various projects some of which include leading the redesign of company's flagship app while collaborating with the design team. I also worked closely with the data science team to integrate AI-driven research into multiple aspects of the KnockNow app.  My proficiency in both front-end and back-end technologies has allowed me to substantially contribute to the company's growth, while at the same time fostering my professional growth in the field of software engineering.",
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
                    more experience to come... hopefully
                </Typography>
            </Box>
        </>
    );
};

export default ExperienceSection;
