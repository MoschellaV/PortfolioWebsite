import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import WorkCard from "./WorkCard";
import SpacingWrapper from "./SpacingWrapper";
import WorkCard2 from "./WorkCard2";

const ExperienceSection = () => {
    const theme = useTheme();

    const jobInfo = [
        {
            company: "Ansys",
            companyName: "ansys.com/fluent",
            companyWebsite: "https://www.ansys.com/products/fluids/ansys-fluent",
            imageUrl: "/images/companyImages/Ansys.png",
            altText: "Ansys Logo",
            positionTitle: (
                <>
                    <span style={{ color: theme.palette.orange.bright }}>Software Engineer Intern</span>
                </>
            ),

            technologies: "React, Redux, Cypress",
            descriptionText:
                "I helped migrate user preference and workflow features from the Ansys Fluent desktop app to a web interface using React and REST APIs, making high performance simulations accessible through the web. I also wrote end-to-end tests using Cypress to simulate user workflows and improving bug detection and test coverage.",
            jobDuration: "May 2024 - Dec 2024",
            location: "Waterloo, ON, Canada",
            isFlipped: false,
        },
        {
            company: "Google Developer Student Clubs",
            companyName: "gdscguelph.com",
            companyWebsite: "https://www.gdscguelph.com/",
            imageUrl: "/images/companyImages/GDSCLogo.png",
            altText: "Google Logo",
            positionTitle: (
                <>
                    <span style={{ color: theme.palette.orange.bright }}>President & Software Developer</span>
                </>
            ),

            technologies: "Leadership, Team Management, Event Planning, Web/Mobile Development",
            descriptionText:
                "I was the lead for the Google Developer Student Club at the University of Guelph during the academic 2023/2024 year! I directed multiple teams, planned workshops, ran a hackathon, and it was all great but what I loved most was being able to build a community of over 250 developers and students. It's awesome seeing people learn and make memories!",
            jobDuration: "Aug 2023 - Aug 2024",
            location: "Guelph, ON, Canada",
            isFlipped: true,
        },
        {
            company: "Saige",
            companyName: "realsaige.com",
            companyWebsite: "https://www.realsaige.com/",
            imageUrl: "/images/companyImages/SaigeLogo.png",
            altText: "Saige Logo",
            positionTitle: (
                <>
                    <span style={{ color: theme.palette.orange.bright }}>Software Engineer Intern</span>
                </>
            ),
            technologies: "React, Next.js, Python, Flask, SQL, AWS, Firebase, Twilio",
            descriptionText:
                "I learned so much during my time at Saige! I managed a team of interns, led the redesign of the company's flagship app, and developed and deployed a multi-channel notification system to production. I really enjoyed working within the start-up's small team as it allowed me to witness firsthand how my contributions had a meaningful impact. I saw how our collaborative efforts translate into tangible improvements for the company and its users.",
            jobDuration: "Jan 2023 - Aug 2023",
            location: "Vancouver, BC, Canada",
            isFlipped: false,
        },
        {
            company: "University of Ottawa",
            companyName: "uottawa.ca",
            companyWebsite: "https://www.uottawa.ca/en",
            imageUrl: "/images/companyImages/UOttawaUniversityLogo.png",
            altText: "University of Ottawa Logo",
            positionTitle: (
                <>
                    <span style={{ color: theme.palette.orange.bright }}> Undergraduate Research Analyst</span> &mdash;
                    Clinical COVID-19 Study
                </>
            ),
            technologies: "Python, R, SPSS, Excel",
            descriptionText:
                "I had the exciting opportunity to collaborate with researchers and provide statistical analysis insights for a clinical COVID-19 study. I got to dive headfirst into the world of data engineering and gained valuable experience preparing datasets and conducting statistical tests with empirical data.",
            jobDuration: "June 2023 - July 2023",
            location: "Toronto, ON, Canada",
            isFlipped: true,
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
