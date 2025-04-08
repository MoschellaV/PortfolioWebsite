import React, { useState } from "react";
import { Grid, Box, Link, useTheme, Typography, Divider, useMediaQuery, Button } from "@mui/material";
import Header from "./Header";
import TLDR from "./TLDR";
import JobItem from "./JobItem";
import Image from "next/image";
import WestIcon from "@mui/icons-material/West";

const jobs = [
    {
        id: 1,
        company: "Amazon",
        role: "Software Development Engineer Intern",
        duration: "Sept 2025 - Dec 2025",
        location: "Vancouver, BC, Canada",
        imageURL: "/images/cv/amazon-logo-nobg.png",
        hoverImage: "/images/cv/amazon-logo.png",
        bulletPoints: [<>Incoming Fall 2025</>],
    },
    {
        id: 2,
        company: "Shopify",
        role: "Software Engineer Intern",
        duration: "May 2025 - Aug 2025",
        location: "Toronto, ON, Canada",
        imageURL: "/images/cv/shopify.png",
        hoverImage: "/images/cv/shopify-long.png",
        bulletPoints: [<>Incoming Summer 2025</>],
    },
    {
        id: 3,
        company: "Ansys",
        role: "Software Engineer Intern",
        duration: "May 2024 - Dec 2024",
        location: "Waterloo, ON, Canada",
        imageURL: "/images/cv/ansys.png",
        hoverImage: "/images/cv/ansys-long.png",
        bulletPoints: [
            <>
                Migrated user preference and workflow features from a desktop app to a web interface using{" "}
                <strong>React</strong> and <strong>REST APIs</strong> to offload computational tasks to Ansys servers
                and eliminate local compute power needs for <strong>over 1 million</strong> users
            </>,
            <>
                Developed a package using <strong>React</strong> and <strong>Redux</strong> to standardize the
                implementation of shortcuts across <strong>3</strong> web-based simulation applications, reducing the
                codebase size by <strong>10%</strong> and improving maintainability
            </>,
            <>
                Wrote end-to-end tests using Cypress to simulate complex user workflows and validate core
                functionalities, increasing bug detection rates by <strong>70%</strong> during the development phase and
                achieving <strong>95%</strong> test coverage
            </>,
        ],
    },
    {
        id: 4,
        company: "Google Developer Student Club",
        role: "President & Software Developer",
        duration: "Aug 2023 - Aug 2024",
        location: "Guelph, ON, Canada",
        imageURL: "/images/cv/gdsc.png",
        hoverImage: "/images/cv/gdsc-long.png",
        bulletPoints: [
            <>
                Selected by Google to lead the Developer Student Club at the University of Guelph, building the{" "}
                {"school's"} largest computer science community of <strong>over 300</strong> active members from the
                ground up
            </>,
            <>
                Raised <strong>over $25,000</strong> from sponsors and directed <strong>30+</strong> people across
                multiple different teams to coordinate a 3-day hackathon that hosted over <strong>200</strong>{" "}
                participants, <strong>20+</strong> workshops, and received recognition from Google
            </>,
            <>
                Constructed a hackathon platform using <strong>React</strong> and <strong>Google Cloud</strong> that
                featured a participant dashboard and an applicant tracking system, enabling organizers to manage over{" "}
                <strong>600</strong> applicants and internal event logistics
            </>,
        ],
    },
    {
        id: 5,
        company: "Saige",
        role: "Software Engineer Intern",
        duration: "Jan 2023 - Aug 2024",
        location: "Vancouver, BC, Canada",
        imageURL: "/images/cv/saige.png",
        hoverImage: "/images/cv/saige-long.png",
        bulletPoints: [
            <>
                Developed and deployed a multi-channel notification system to production using <strong>AWS</strong>{" "}
                (Lambda, SQS, SNS), <strong>Firebase</strong>, and Twilio, delivering email, SMS, and push notifications
                to <strong>more than 10,000</strong> monthly active users
            </>,
            <>
                Implemented a major overhaul of the property analytics service by rewriting database queries in{" "}
                <strong>Python</strong> to optimize data fetching, reducing query execution time by <strong>40%</strong>{" "}
                and decreasing page load times
            </>,
            <>
                Directed the redesign of key pages within the {"company's"} flagship app using <strong>React</strong> by
                overseeing a team of 3 interns and employing agile methodologies to coordinate with the design team,
                delivering the project <strong>2 months ahead of schedule</strong>
            </>,
        ],
    },
    {
        id: 6,
        company: "University of Ottawa",
        role: "Undergraduate Researcher",
        duration: "June 2023 - July 2023",
        location: "Toronto, ON, Canada",
        imageURL: "/images/cv/uofottawa.png",
        hoverImage: "/images/cv/uofottawa-long.png",
        bulletPoints: [
            <>
                Collaborated with a research team to investigate patient awareness of signs and symptoms of blood clots
                after hospitalization for COVID-19, enhancing the understanding of post-discharge health risks
            </>,
            <>
                Leveraged <strong>Python</strong> to clean, merge, and preprocess collected data for{" "}
                <strong>over 500</strong> patients, using SPSS and R to find trends, calculate confidence intervals, and
                conduct p-tests
            </>,
        ],
    },
];

const university = {
    id: 99,
    company: "University of Guelph",
    role: "Honours Bachelor of Computing, Major in Computer Science",
    duration: "Expected May 2026",
    location: "Guelph, ON, Canada",
    imageURL: "/images/cv/uofg.png",
    hoverImage: "/images/cv/uofg-long.png",
    bulletPoints: [
        <>
            <strong>GPA: 3.94</strong>
        </>,
        <>Coursework: Data Structures and Algorithms, System Design, Object Oriented Programming, Programming I & II</>,
    ],
};

const techStack1 =
    "Node.js • C • TypeScript • Java • Redux • SQL • Google Cloud Platform • Express • HTML • CSS • Flask • JavaScript • Next.js • Docker • Python • Amazon Web Services • React • Node.js • C • TypeScript • Java • Redux • SQL • Google Cloud Platform • Express • HTML • CSS • Flask • JavaScript • Next.js • Docker • Python • Amazon Web Services • React";
const techStack2 =
    "Google Cloud Platform • Express • Next.js • Python • Java • Redux • JavaScript • SQL • C • Node.js • TypeScript • Flask • React • Docker • Amazon Web Services • HTML • CSS • Google Cloud Platform • Express • Next.js • Python • Java • Redux • JavaScript • SQL • C • Node.js • TypeScript • Flask • React • Docker • Amazon Web Services • HTML • CSS";
const techStack3 =
    "Node.js • Docker • Next.js • Google Cloud Platform • JavaScript • Express • HTML • CSS • React • Python • Java • TypeScript • C • SQL • Flask • Redux • Amazon Web Services • Node.js • Docker • Next.js • Google Cloud Platform • JavaScript • Express • HTML • CSS • React • Python • Java • TypeScript • C • SQL • Flask • Redux • Amazon Web Services";

const CV = () => {
    const theme = useTheme();
    const [hoverId, setHoverId] = useState(1);
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const currentJob = [...jobs, university].find((job) => job.id === hoverId) || jobs[0];
    const displayedImage = currentJob.hoverImage;

    return (
        <>
            <Link href="/">
                <Button
                    variant="contained"
                    sx={{
                        // width: 180,
                        backgroundColor: "#fff",
                        color: theme.palette.primary.main,
                        "&:hover": {
                            backgroundColor: theme.palette.primary.main,
                            color: "#fff",
                        },
                        borderRadius: "0",
                        padding: 2,
                        textTransform: "none",
                        boxShadow: "none",
                    }}
                >
                    <WestIcon sx={{ mr: 1 }} />
                    Go Back
                </Button>
            </Link>
            <Box sx={{ px: { xs: 3, md: 10, lg: 20 }, pt: 7, pb: 3 }}>
                <Grid container>
                    <Grid item xs={!isMobile ? 7 : 12}>
                        <Header />
                        <TLDR />
                    </Grid>
                    {!isMobile && (
                        <Grid item xs={5} sx={{ display: "flex", position: "relative", flexDirection: "row-reverse" }}>
                            <Box sx={{ position: "relative", width: "80%", height: "80%" }}>
                                <Image
                                    key={displayedImage}
                                    src={displayedImage}
                                    alt=" "
                                    fill
                                    style={{
                                        objectFit: "contain",
                                        opacity: 0,
                                        animation: "fadeIn 0.5s forwards ease-in-out",
                                    }}
                                    draggable={false}
                                />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        background:
                                            "linear-gradient(to bottom left, #171717 10%, rgba(23, 23, 23, 0) 100%)",
                                        pointerEvents: "none",
                                    }}
                                />
                            </Box>
                        </Grid>
                    )}
                </Grid>

                {jobs.map((item) => (
                    <Box key={item.id} sx={{ my: 1 }}>
                        <JobItem job={item} isHovered={hoverId === item.id} setHoverId={setHoverId} />
                    </Box>
                ))}
                <Divider color="white" sx={{ my: 4 }} />
                <JobItem job={university} isHovered={hoverId === university.id} setHoverId={setHoverId} />
            </Box>

            <Box sx={{ mt: 5 }} />
            <Typography
                component="p"
                variant="CVTitle"
                sx={{
                    ml: -5,
                    mr: -500,
                    WebkitTextStrokeColor: theme.palette.secondary.main,
                    opacity: 0.1,
                    mt: 0.5,
                    fontSize: 22,
                    fontWeight: 400,
                }}
            >
                {techStack1}
            </Typography>
            <Typography
                component="p"
                variant="CVTitle"
                sx={{
                    ml: -5,
                    mr: -500,
                    WebkitTextStrokeColor: theme.palette.secondary.main,
                    opacity: 0.1,
                    mt: 0.5,
                    fontSize: 22,
                    fontWeight: 400,
                }}
            >
                {techStack2}
            </Typography>
            <Typography
                component="p"
                variant="CVTitle"
                sx={{
                    ml: -5,
                    mr: -500,
                    WebkitTextStrokeColor: theme.palette.secondary.main,
                    opacity: 0.1,
                    mt: 0.5,
                    fontSize: 22,
                    fontWeight: 400,
                }}
            >
                {techStack3}
            </Typography>
        </>
    );
};

export default CV;
