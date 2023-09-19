import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import WorkCard from "./WorkCard";
import SpacingWrapper from "./SpacingWrapper";
import WorkCard2 from "./WorkCard2";

const ExperienceSection = () => {
    const theme = useTheme();

    const jobInfo = [
        {
            company: "Google",
            companyName: "developers.google.com",
            companyWebsite: "https://developers.google.com/community/gdsc",
            imageUrl: "/images/companyImages/GDSCLogo.png",
            altText: "Google Logo",
            positionTitle: (
                <>
                    Developer Student Club <span style={{ color: theme.palette.orange.bright }}>Lead</span>
                </>
            ),

            technologies: "Web & Mobile Technologies - React, Flutter, GCP, Firebase",
            descriptionText:
                "I currently Lead the Google Developer Student Club at the University of Guelph! The club focuses on connecting like-minded developers and giving students the resources to help them grow their careers. The club has hosted events, workshops, and hackathons aimed at teaching students and giving them the tools to create positive social impact.",
            jobDuration: "Aug 2023 - Present",
            location: "Guelph, ON",
            isFlipped: false,
        },
        {
            company: "Saige",
            companyName: "realsaige.com",
            companyWebsite: "https://www.realsaige.com/",
            imageUrl: "/images/companyImages/SaigeLogo.png",
            altText: "Saige Logo",
            positionTitle: (
                <>
                    <span style={{ color: theme.palette.orange.bright }}>Full Stack</span> Software Developer
                </>
            ),
            technologies: "React, Next, Flask, SQL, AWS, Firebase",
            descriptionText:
                "I learned so much during my time at Saige! From managing a team of interns to lead the redesign of the company's flagship app, to building a multi-channel notification system and deploying it to production. I really enjoyed working within the start-up's small team as it allowed me to witness firsthand how my contributions had a meaningful impact. I saw how our collaborative efforts translated into tangible improvements for the company and its users.",
            jobDuration: "Jan 2023 - Aug 2023",
            location: "Vancouver, BC",
            isFlipped: true,
        },
        {
            company: "University of Ottawa",
            companyName: "uottawa.ca",
            companyWebsite: "https://www.uottawa.ca/en",
            imageUrl: "/images/companyImages/UOttawaUniversityLogo.png",
            altText: "University of Ottawa Logo",
            positionTitle: (
                <>
                    <span style={{ color: theme.palette.orange.bright }}>Data Engineer</span> Undergraduate Researcher
                </>
            ),
            technologies: "Python, R, SPSS, Excel",
            descriptionText:
                "I had the exciting opportunity to collaborate with researchers and provide statistical analysis insights for a clinical COVID-19 study. I got to dive headfirst into the world of data engineering and gained valuable experience preparing datasets and conducting statistical tests with empirical data.",
            jobDuration: "June 2023 - July 2023",
            location: "Toronto, ON",
            isFlipped: false,
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
                        WebkitTextStrokeColor: theme.palette.secondary.main,
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
                        WebkitTextStrokeWidth: { xs: "1.5px", md: "3px" },
                        fontSize: { xs: "clamp(1rem, 9vw, 10rem)", sm: 65, md: 100 },
                    }}
                >
                    Experience
                </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
                {/* handles rendering each job */}
                <SpacingWrapper>
                    <WorkCard2 jobInfo={jobInfo} />
                </SpacingWrapper>
            </Box>
            {/* <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "20vw", m: 5 }}>
                <Typography
                    variant="h3"
                    component="p"
                    sx={{
                        opacity: 0.2,
                        color: theme.palette.primary.main,
                        fontWeight: 400,
                        WebkitTextStrokeWidth: 0,
                        textAlign: "center",
                    }}
                >
                    more to come...
                </Typography>
            </Box> */}
        </>
    );
};

export default ExperienceSection;
