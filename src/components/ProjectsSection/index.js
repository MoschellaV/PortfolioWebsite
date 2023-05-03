import React from "react";
import Project from "./Project";
import { Box, Grid, Typography, useTheme } from "@mui/material";

// 3d models
import GameController from "../3dModels/ProjectModels/GameController";
import SortingBars from "../3dModels/ProjectModels/SortingBars";
import CraftACard from "../3dModels/ProjectModels/CraftACard";
import PortfolioWebsite from "../3dModels/ProjectModels/PortfolioWebsite";
import RingClone from "../3dModels/ProjectModels/RingClone";

const ProjectSection = () => {
    const theme = useTheme();

    const projectsInfo = [
        {
            name: "Ring Clone",
            technologies: "OpenCV/Flask/React",
            chips: ["In Progress", "Computer vision", "Sneaky surveillance"],
            points: [
                "Raspberry Pi, face detection using Python & OpenCV.",
                "Node/Express server for data transmission.",
                "Cross-platform mobile app with React Native.",
                "MySQL for data management & user account integration.",
            ],
            githubLink: null, // "https://github.com/MoschellaV/RingClone", // leave as null if there is not link
            externalLink: null, // leave as null if there is not link
            model: <RingClone />,
        },
        {
            name: "Portfolio Website",
            technologies: "Next.js/Spline",
            chips: ["3D Models", "Handcrafted", "Magic Touch", "User Experience"],
            points: [
                "Employed Next.js for swift, reliable web app.",
                "3D modeled all assets using Spline.",
                "Integrated & optimized models for user experience.",
                "Used Figma for prototyping and design iteration.",
            ],
            githubLink: "https://github.com/MoschellaV/portfolio_website",
            externalLink: null,
            model: <PortfolioWebsite />,
        },
        {
            name: "CraftACard",
            technologies: "MERN Stack",
            chips: ["Full-Stack", "Data Storage", "NoSQL Here"],
            points: [
                "Built with MERN stack with data storage and sending.",
                "Responsive UI with React & React-Bootstrap.",
                "Secure & efficient user data storage using MongoDB.",
                "Backend powered by Node.js/Express for API integrations.",
                "Hosted on Heroku for easy deployment & scaling.",
            ],
            githubLink: "https://github.com/MoschellaV/CraftACardWebProject",
            externalLink: "https://craftacard.herokuapp.com/",
            model: <CraftACard />,
        },
        {
            name: "Sorting Visualizer",
            technologies: "React/Mantine",
            chips: ["Algorithms", "Mesmerizing", "Interactive"],
            points: [
                "Built with MERN stack with data storage and sending.",
                "Responsive UI with React & React-Bootstrap.",
                "Secure & efficient user data storage using MongoDB.",
                "Backend powered by Node.js/Express for API integrations.",
                "Hosted on Heroku for easy deployment & scaling.",
            ],
            githubLink: "https://github.com/MoschellaV/SortingVisualizer",
            externalLink: "https://moschella-sorting-visualizer.netlify.app/",
            model: <SortingBars />,
        },
        {
            name: "Kuiper Space",
            technologies: "Unity",
            chips: ["2D Game", "Dynamic Mechanics", "Enemy Algorithm", "High School Project"],
            points: [
                "2D space shooter, destroy asteroids to gain score.",
                "Online leaderboard for player competition.",
                "Multiple playable ships with unique behaviors.",
                "Varied enemies and custom particle effects.",
                "Difficulty increases with player score via algorithm.",
            ],
            githubLink: "https://github.com/MoschellaV/KuiperSpace",
            externalLink: "https://vmoschella.itch.io/kuiper-space",
            model: <GameController />,
        },
    ];

    const renderProjects = projectsInfo.map((projectData, index) => {
        return (
            <Grid key={index} xs={12} lg={6}>
                <Project projectData={projectData} projectIndex={index} />
            </Grid>
        );
    });

    return (
        <>
            <Box
                id="projects"
                sx={{
                    width: "100vw",
                    height: 256,
                    pt: 1,
                    pb: 1,
                    backgroundColor: theme.palette.primary.main,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    component="h3"
                    variant="h3"
                    sx={{ ml: -100, mr: -100, "-webkit-text-stroke-color": theme.palette.secondary.main }}
                >
                    <Box sx={{ display: "inline-block", mr: 5 }}>Projects</Box>
                    <Box sx={{ display: "inline-block", mr: 5, transform: "rotate(-20deg)" }}>Projects</Box>{" "}
                    <Box sx={{ display: "inline-block", mr: 5 }}>Projects</Box>
                    <Box
                        sx={{
                            display: "inline-block",
                            mr: 5,
                            transform: "rotate(-20deg)",
                            "-webkit-text-stroke-color": theme.palette.orange.bright,
                        }}
                    >
                        Projects
                    </Box>{" "}
                    <Box sx={{ display: "inline-block", mr: 5 }}>Projects</Box>
                    <Box sx={{ display: "inline-block", mr: 5, transform: "rotate(-20deg)" }}>Projects</Box>{" "}
                    <Box sx={{ display: "inline-block" }}>Projects</Box>
                </Typography>
            </Box>
            <Grid container spacing={0} sx={{ flexGrow: 1 }}>
                {renderProjects}
            </Grid>
        </>
    );
};
export default ProjectSection;
